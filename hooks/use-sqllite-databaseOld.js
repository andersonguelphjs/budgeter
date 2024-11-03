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
      const rowData = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            const query = `SELECT * FROM ${table} WHERE id = ?`;
            tx.executeSql(
              query,
              [id],
              (_, result) => {
                const rows = result.rows;
                if (rows.length > 0) {
                  console.log(`Row data for ID ${id}: `, rows._array[0]);
                  resolve(rows._array[0]);
                } else {
                  console.log(`No row found for ID ${id}`);
                  resolve(null);
                }
              },
              (_, error) => {
                console.error(`Error fetching row from ${table} with ID ${id}: `, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error for fetching row from ${table} with ID ${id}: `, error);
            reject(error);
          }
        );
      });
  
      return rowData;
    } catch (error) {
      console.error(`Error fetching row from ${table} with ID ${id}: `, error);
      throw error;
    }
  };
  
  const getFirstRowByField = async (key, value) => {
    console.log(`Fetch row from ${table} where ${key} = ${value}`);
    try {
      const rowData = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            const query = `SELECT * FROM ${table} WHERE ${key} = ?`;
            tx.executeSql(
              query,
              [value],
              (_, result) => {
                const rows = result.rows;
                if (rows.length > 0) {
                  console.log(`Row data for ${key} = ${value}: `, rows.length);
                  resolve(rows._array[0]);
                } else {
                  console.log(`No row found for ${key} = ${value}`);
                  resolve(null);
                }
              },
              (_, error) => {
                console.error(`Error fetching row from ${table} where ${key} = ${value}: `, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error for fetching row from ${table} where ${key} = ${value}: `, error);
            reject(error);
          }
        );
      });
  
      return rowData;
    } catch (error) {
      console.error(`Error fetching row from ${table} where ${key} = ${value}: `, error);
      throw error;
    }
  };
  const getAllRowsByField = async (key, value) => {
    console.log(`Fetch all rows from ${table} where ${key} = ${value}`);
    try {
      const allRowsData = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            const query = `SELECT * FROM ${table} WHERE ${key} = ?`;
            tx.executeSql(
              query,
              [value],
              (_, result) => {
                const rows = result.rows;
                console.log(`Number of rows fetched for ${key} = ${value}: `, rows.length);
                resolve(rows.length > 0 ? rows._array : []);
              },
              (_, error) => {
                console.error(`Error fetching rows from ${table} where ${key} = ${value}: `, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error for fetching rows from ${table} where ${key} = ${value}: `, error);
            reject(error);
          }
        );
      });
  
      return allRowsData;
    } catch (error) {
      console.error(`Error fetching rows from ${table} where ${key} = ${value}: `, error);
      throw error;
    }
  };
  
  const createNewRow = async (initialValues) => {
    console.log(`Creating new row in ${table} with initial values:`, initialValues);
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            const fields = Object.keys(initialValues).join(", ");
            const placeholders = new Array(Object.values(initialValues).length).fill("?").join(", ");
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
                console.error(`Error inserting new row in ${table}:`, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error on inserting new row in ${table}:`, error);
            reject(error);
          }
        );
      });
  
      return result;
    } catch (error) {
      console.error(`Error creating new row in ${table}:`, error);
      throw error;
    }
  };
  
  const deleteAllRowsByField = async (columnName, value) => {
    console.log(`Deleting all rows from ${table} where ${columnName} = ${value}`);
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            const query = `DELETE FROM ${table} WHERE ${columnName} = ?`;
            tx.executeSql(
              query,
              [value],
              (_, result) => {
                console.log(`Rows deleted from ${table} where ${columnName} = ${value}:`, result.rowsAffected);
                resolve(result);
              },
              (_, error) => {
                console.error(`Error deleting rows from ${table} where ${columnName} = ${value}:`, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error on delete from ${table} where ${columnName} = ${value}:`, error);
            reject(error);
          }
        );
      });
      return result;
    } catch (error) {
      console.error(`Error deleting rows from ${table} where ${columnName} = ${value}:`, error);
      throw error;
    }
  };
  
  const updateRow = async (id, newData) => {
    console.log(`Update row in ${table} with ID: ${id}, new data:`, newData);
    try {
      await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            const fields = Object.keys(newData)
              .map((field) => `${field} = ?`)
              .join(", ");
            const values = [...Object.values(newData), id]; // Spreading new values and appending the id at the end
            const query = `UPDATE ${table} SET ${fields} WHERE id = ?`;
            
            tx.executeSql(
              query,
              values,
              (_, result) => {
                if (result.rowsAffected > 0) {
                  console.log(`Row in ${table} with ID ${id} updated successfully.`);
                  resolve(result);
                } else {
                  console.log(`No row found with ID ${id}. No update performed.`);
                  resolve(result); // Resolve with the result, but no update was performed
                }
              },
              (transaction, error) => {
                console.error(`Error updating row in ${table} with ID ${id}:`, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error on updating row in ${table} with ID ${id}:`, error);
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error(`Error updating row in ${table} with ID ${id}:`, error);
      throw error;
    }
  };
  
  const deleteRow = async (id) => {
    console.log(`Delete row in ${table} with ID: ${id}`);
    try {
      await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              `DELETE FROM ${table} WHERE id = ?`,
              [id],
              (_, result) => {
                if (result.rowsAffected > 0) {
                  console.log(`Row in ${table} with ID ${id} deleted successfully.`);
                  resolve(result);
                } else {
                  console.log(`No row found with ID ${id}. No delete performed.`);
                  resolve(result); // Resolve with the result, but no delete was performed
                }
              },
              (transaction, error) => {
                console.error(`Error deleting row in ${table} with ID ${id}:`, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error on deleting row in ${table} with ID ${id}:`, error);
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error(`Error deleting row in ${table} with ID ${id}:`, error);
      throw error;
    }
  };
  
  const getAllRows = async () => {
    console.log(`Fetching all rows from ${table}.`);
    try {
      const rowData = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              `SELECT * FROM ${table}`,
              [],
              (_, { rows }) => {
                console.log(`Fetched ${rows.length} rows from ${table} successfully.`);
                resolve(rows._array);
              },
              (transaction, error) => {
                console.error(`Error fetching all rows from ${table}:`, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error on fetching all rows from ${table}:`, error);
            reject(error);
          }
        );
      });
      return rowData;
    } catch (error) {
      console.error(`Error fetching all rows from ${table}:`, error);
      throw error; // Re-throw the error after logging
    }
  };
  

  const deleteAllRows = async () => {
    console.log(`Attempting to delete all rows from ${table}.`);
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              `DELETE FROM ${table}`,
              [],
              (_, { rowsAffected }) => {
                console.log(`All rows in ${table} deleted. Rows affected: ${rowsAffected}`);
                resolve(rowsAffected);
              },
              (_, error) => {
                console.error(`Error deleting all rows in ${table}:`, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error on deleting all rows from ${table}:`, error);
            reject(error);
          }
        );
      });
      return result;
    } catch (error) {
      console.error(`Error deleting all rows in ${table}:`, error);
      throw error;
    }
  };
  
  const getRowCount = async () => {
    console.log(`Counting rows in ${table}.`);
    try {
      const count = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              `SELECT COUNT(*) AS count FROM ${table}`,
              [],
              (_, { rows }) => {
                const count = rows.item(0).count;
                console.log(`Row count in ${table}: ${count}`);
                resolve(count);
              },
              (_, error) => {
                console.error(`Error getting row count in ${table}:`, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error on getting row count from ${table}:`, error);
            reject(error);
          }
        );
      });
      return count;
    } catch (error) {
      console.error(`Error getting row count in ${table}:`, error);
      throw error;
    }
  };
  
  const deleteField = async (columnName) => {
    console.log(`Attempting to delete column ${columnName} from ${table}.`);
    try {
      // Assuming the new table is temporarily called 'new_table'
      const newTable = `${table}_new`;
      await new Promise((resolve, reject) => {
        db.transaction(
          async (tx) => {
            // Generate a list of columns except the one to be deleted
            const queryForColumns = `PRAGMA table_info(${table})`;
            tx.executeSql(queryForColumns, [], (_, { rows }) => {
              const columns = rows._array
                .map((col) => col.name)
                .filter((colName) => colName !== columnName)
                .join(", ");
              
              // Create a new table without the unwanted column
              tx.executeSql(`CREATE TABLE ${newTable} AS SELECT ${columns} FROM ${table}`, [], null, (_, error) => reject(error));
              
              // Delete the old table
              tx.executeSql(`DROP TABLE ${table}`, [], null, (_, error) => reject(error));
              
              // Rename the new table to the old table's name
              tx.executeSql(`ALTER TABLE ${newTable} RENAME TO ${table}`, [], null, (_, error) => reject(error));
            }, (_, error) => {
              reject(error);
            });
          },
          (error) => {
            console.error(`Transaction error on deleting column in ${table}:`, error);
            reject(error);
          },
          () => {
            console.log(`Column ${columnName} deleted successfully from ${table}.`);
            resolve();
          }
        );
      });
    } catch (error) {
      console.error(`Error deleting column in ${table}:`, error);
      throw error;
    }
  };
  
  const getSchema = async () => {
    console.log(`Retrieving schema for ${table}.`);
    try {
      const schema = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              `PRAGMA table_info(${table})`, // Retrieves the schema
              [],
              (_, { rows }) => {
                const schema = rows._array.map((column) => ({
                  name: column.name,
                  type: column.type,
                  // Include other properties if necessary
                }));
                console.log(`Schema retrieved for ${table}:`, schema);
                resolve(schema);
              },
              (_, error) => {
                console.error(`Error getting schema of ${table}:`, error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error(`Transaction error on getting schema of ${table}:`, error);
            reject(error);
          }
        );
      });
      return schema;
    } catch (error) {
      console.error(`Error getting schema of ${table}:`, error);
      throw error; // Rethrow after logging
    }
  };
  
  const dropTable = async () => {
    console.log(`Attempting to drop ${table} table.`);
    try {
      const result = await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
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
          },
          (error) => {
            console.error(`Transaction error on dropping ${table} table:`, error);
            reject(error);
          }
        );
      });
      console.log(`Table ${table} dropped successfully.`);
      return result;
    } catch (error) {
      console.error(`Error dropping ${table} table:`, error);
      throw error;
    }
  };
  
  const reinitializeDb = async () => {
    console.log(`Reinitializing database for ${table}.`);
    try {
      await dropTable(); // Ensure that dropTable is awaited
      await initializeDatabase(); // Assuming initializeDatabase is an async function
      console.log(`Database for ${table} reinitialized successfully.`);
    } catch (error) {
      console.error(`Error reinitializing database for ${table}:`, error);
      throw error; // Rethrow after logging
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
    dropTable:dropTable,
    deleteAllRowsByField:deleteAllRowsByField,
    getAllRowsByField :getAllRowsByField 
  };
  return {
    sql_table,
  };
};

export default useSQLLiteDatabase;
