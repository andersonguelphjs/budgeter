import { useEffect } from "react";
import * as SQLite from "expo-sqlite";

const useSQLLiteDatabase = ({ table, desiredSchema = [] }) => {
  
  const db = SQLite.openDatabase(`${table}_database.db`);

  useEffect(() => {
    const init = async () => {
      const initResponse = await initializeDatabase();
      console.log(`useSQLLiteDatabase init ${table} Response `, initResponse);
      await addMissingFieldsToTable();
    };
    init();
  }, []);

  const initializeDatabase = async () => {
    console.log("Initializing database");
    const result = await new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS ${table} (
              id INTEGER PRIMARY KEY AUTOINCREMENT
            )`,
            [],
            (_, result) => {
              resolve(result);
            },
            (_, error) => {
              reject(error);
            }
          );
        },
        (error) => {
          reject(error);
        }
      );
    });
    return result;
  };

  const addMissingFieldsToTable = async () => {

    const result = await new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(`PRAGMA table_info(${table})`, [], (_, { rows }) => {
            const currentSchema = rows._array;
            const missingFields = desiredSchema.filter(
              (field) =>
                !currentSchema.find((column) => column.name === field.name)
            );

            missingFields.forEach((field) => {
              const { name, type } = field;
              tx.executeSql(
                `ALTER TABLE ${table} ADD COLUMN ${name} ${type}`,
                [],
                () => {
                  console.log(`Field ${name} added successfully`);
                },
                (_, error) => {
                  console.log(`Error adding field ${name}:`, error);
                }
              );
            });
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
    return result;
  };

  const getFirstRow = async () => {
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            `SELECT * FROM ${table} LIMIT 1`,
            [],
            (_, { rows }) => {
              const rowData = rows.length > 0 ? rows.item(0) : null;
              resolve(rowData);
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
      return result || false;
    } catch (error) {
      console.log(`Error loading first row ${table}`, error);
    }
  };

  const getRowById = async (id) => {
    console.log(`Fetch row from ${table} with ID: ${id}`);
    try {
      // We're using a Promise to handle the asynchronous nature of the transaction
      const rowData = await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          // Prepare the SQL query
          const query = `SELECT * FROM ${table} WHERE id = ?`;
  
          // Execute the SQL query
          tx.executeSql(
            query,
            [id],  // This array holds any parameters for the query
            (_, result) => {
              // If the query was successful, we expect the result in result.rows._array (if using 'expo-sqlite')
              const rows = result.rows;
              if (rows.length > 0) {
                console.log(`Row data for ID ${id}: `, rows._array[0]); // log the first row data
                resolve(rows._array[0]); // resolve the promise with the row data
              } else {
                console.log(`No row found for ID ${id}`);
                resolve(null); // resolve the promise with null to indicate no data found
              }
            },
            (_, error) => {
              // If there was an issue with the transaction, we don't proceed and report back with the error
              console.log(`Error fetching row from ${table} with ID ${id}: `, error);
              reject(error); // reject the promise with the error
            }
          );
        });
      });
  
      return rowData; // rowData will be either an object of the row data, null if no data, or undefined if an error occurred
    } catch (error) {
      console.log(`Error fetching row from ${table} with ID ${id}: `, error);
      // handle error appropriately, maybe throw the error or return an appropriate value
    }
  };
  
  const createNewRow = async (initialValues) => {
    console.log(`Creating new row for ${table} with initial values ${initialValues}`);
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          const fields = Object.keys(initialValues).join(", ");
          const placeholders = Object.values(initialValues)
            .map(() => "?")
            .join(", ");
          const values = Object.values(initialValues);
          const query = `INSERT INTO ${table} (${fields}) VALUES (${placeholders})`;

          tx.executeSql(
            query,
            values,
            (_, { insertId }) => {
              console.log(`New row in ${table} created with ID:`, insertId);
              resolve(insertId);
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
      return result;
    } catch (error) {
      console.log(`Error creating new row in ${table}:`, error);
    }
  };

  const updateRow = async (id, newData) => {
    console.log(`Update row in ${table} with ID: ${id}`);
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          const fields = Object.keys(newData)
            .map((field) => `${field} = ?`)
            .join(", ");
          const values = Object.values(newData);
          values.push(id);

          const query = `UPDATE ${table} SET ${fields} WHERE id = ?`;

          tx.executeSql(
            query,
            values,
            () => {
              console.log(`row in ${table} with Id ${id} updated successfully`);
              resolve();
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
      return result;
    } catch (error) {
      console.log(`Error updating row in ${table} with Id ${id}:`, error);
    }
  };

  const deleteRow = async (id) => {
    console.log(`delete row in ${table} with Id ${id}`);
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            `DELETE FROM ${table} WHERE id = ?`,
            [id],
            (_, { rowsAffected }) => {
              console.log(
                `row in ${table} with id ${id} deleted:`,
                rowsAffected
              );
              resolve();
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
      return result;
    } catch (error) {
      console.log(`Error deleting row in ${table} with id ${id}:`, error);
    }
  };

  const getAllRows = async () => {
    try {
      return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            `SELECT * FROM ${table}`,
            [],
            (_, { rows }) => {
              const rowData = rows._array;
              resolve(rowData);
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
    } catch (error) {
      console.log(`Error getting all rows in ${table}:`, error);
      return [];
    }
  };

  const deleteAllRows = async () => {
    try {
      await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            `DELETE FROM ${table}`,
            [],
            (_, { rowsAffected }) => {
              console.log(`All rows in ${table} deleted:`, rowsAffected);
              resolve();
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
    } catch (error) {
      console.log(`Error deleting all rows in ${table}:`, error);
    }
  };

  return {
    getFirstRow,
    getRowById,
    createNewRow,
    updateRow,
    deleteRow,
    getAllRows,
    deleteAllRows,
  };
};

export default useSQLLiteDatabase;
