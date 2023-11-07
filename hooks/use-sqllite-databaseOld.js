import { useEffect } from "react";
import * as SQLite from "expo-sqlite";

const useSQLLiteDatabase = ({ table, db_name, desiredSchema = [] }) => {
  const db = SQLite.openDatabase(`${db_name}_database.db`);

  useEffect(() => {
    // const init = async () => {
    //   const initResponse = await initializeDatabase();
    //   console.log(`useSQLLiteDatabase init ${table} Response `, initResponse);
      
    // };
    initializeDatabase();
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
    await addMissingFieldsToTable();
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
            [id], // This array holds any parameters for the query
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
              console.log(
                `Error fetching row from ${table} with ID ${id}: `,
                error
              );
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
  const getFirstRowByField = async (key, value) => {
    console.log(`Fetch row from ${table} where ${key} = ${value}`);
    try {
      // We're using a Promise to handle the asynchronous nature of the transaction
      const rowData = await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          // Prepare the SQL query
          const query = `SELECT * FROM ${table} WHERE ${key} = ?`;

          // Execute the SQL query
          tx.executeSql(
            query,
            [value], // This array holds any parameters for the query
            (_, result) => {
              // If the query was successful, we expect the result in result.rows._array (if using 'expo-sqlite')
              const rows = result.rows;
              if (rows.length > 0) {
                console.log(`Row data for ${key} = ${value}: `, rows._array[0]); // log the first row data
                resolve(rows._array[0]); // resolve the promise with the row data
              } else {
                console.log(`No row found for ${key} = ${value}`);
                resolve(null); // resolve the promise with null to indicate no data found
              }
            },
            (_, error) => {
              // If there was an issue with the transaction, we don't proceed and report back with the error
              console.log(
                `Error fetching row from ${table} where ${key} = ${value}: `,
                error
              );
              reject(error); // reject the promise with the error
            }
          );
        });
      });

      return rowData; // rowData will be either an object of the row data, null if no data, or undefined if an error occurred
    } catch (error) {
      console.log(
        `Error fetching row from ${table} where ${key} = ${value}: `,
        error
      );
      // handle error appropriately, maybe throw the error or return an appropriate value
    }
  };

  const createNewRow = async (initialValues) => {
    console.log(
      `Creating new row for ${table} with initial values ${initialValues}`
    );
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          const fields = Object.keys(initialValues).join(", ");
          const placeholders = Object.values(initialValues)
            .map(() => "?")
            .join(", ");
          const values = Object.values(initialValues);
          const query = `INSERT INTO ${table} (${fields}) VALUES (${placeholders})`;
          console.log("query:", query);
          tx.executeSql(
            query,
            values,
            (_, { insertId }) => {
              console.log(`New row in ${table} created with ID:`, insertId);
              resolve(insertId);
            },
            (_, error) => {
              console.log("Error inserting row in ${table}, error:", error);
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
    console.log(`Update row in ${table} with ID: ${id}, new data: ${newData}`);
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
  // ... (rest of your existing hook code)

  const getRowCount = async () => {
    try {
      return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            `SELECT COUNT(*) as count FROM ${table}`,
            [],
            (_, { rows }) => {
              const count = rows.item(0).count; // Should give us the count
              resolve(count);
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
    } catch (error) {
      console.log(`Error getting row count in ${table}:`, error);
      return -1; // or any other indication of failure
    }
  };

  const deleteField = async (columnName) => {
    try {
      // SQLite doesn't support the DROP COLUMN syntax.
      // We need to create a new table and copy the data into it.

      // 1. Start a transaction
      await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            // 2. Create a new table with the desired structure without the unwanted column.
            // tx.executeSql(/* SQL for creating new table without 'columnName' */, [], null, (_, error) => reject(error));
            // // 3. Copy data from the old table to the new table, excluding the unwanted column.
            // tx.executeSql(/* SQL for copying data */, [], null, (_, error) => reject(error));
            // // 4. Delete the old table.
            // tx.executeSql(`DROP TABLE ${table}`, [], null, (_, error) => reject(error));
            // // 5. Rename the new table to the old table's name.
            // tx.executeSql(/* SQL for renaming table */, [], null, (_, error) => reject(error));
          },
          (error) => {
            // transaction error callback
            reject(error);
          },
          () => {
            // transaction success callback
            resolve();
          }
        );
      });
    } catch (error) {
      console.log(`Error deleting column in ${table}:`, error);
    }
  };

  const getSchema = async () => {
    try {
      return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            `PRAGMA table_info(${table})`, // This SQLite PRAGMA statement retrieves the schema
            [],
            (_, { rows }) => {
              const schema = rows._array.map((column) => ({
                name: column.name,
                type: column.type,
                // Add other properties here if needed
              }));
              resolve(schema);
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
    } catch (error) {
      console.log(`Error getting schema of ${table}:`, error);
      return []; // or any other indication of failure
    }
  };

  const dropTable = async () => {
    try {
      // Step 1: Drop the existing table
      await new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            `DROP TABLE IF EXISTS ${table}`,
            [],
            (_, result) => {
              console.log(`${table} table dropped successfully.`);
              resolve(result);
            },
            (_, error) => {
              console.error(`Error dropping ${table} table:`, error);
              reject(error);
            }
          );
        });
      });

      console.log(`Table ${table} dropped.`);

    } catch (error) {
      console.error(`Error reinitializing database:`, error);
      // Handle or throw error as appropriate
    }
  };

  const reinitializeDb = async () => {
    try {
      // Step 1: Drop the existing table
      dropTable()
      initializeDatabase();
      console.log(`Table ${table} reinitialized.`);
    } catch (error) {
      console.error(`Error reinitializing database:`, error);
      // Handle or throw error as appropriate
    }
  };

  const sql_table = {
    getFirstRow: getFirstRow,
    getRowById: getRowById,
    getFirstRowByField: getFirstRowByField,
    createNewRow: createNewRow,
    updateRow: updateRow,
    deleteRow: deleteRow,
    getAllRows: getAllRows,
    deleteAllRows: deleteAllRows,
    getRowCount: getRowCount,
    deleteField: deleteField,
    getSchema: getSchema,
    reinitializeDb: reinitializeDb,
    dropTable:dropTable
  };
  return {
    sql_table,
  };
};

export default useSQLLiteDatabase;
