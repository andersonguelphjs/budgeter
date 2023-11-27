import React, { useContext, useState } from "react";
import { Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { View, ScrollView, StyleSheet, Text, Modal, Alert } from "react-native";
import Button from "../components/ui/Button";
import { AppContext } from "../store/app-context";
import { Picker } from "@react-native-picker/picker";
import JSONTree from "react-native-json-tree";
import default_HourlyIncomes from "../assets/preload/HourlyIncomesDefault.json";
import default_OneTimeExpenses from "../assets/preload/OneTimeExpensesDefault.json";
import default_OneTimeIncomes from "../assets/preload/OneTimeIncomesDefault.json";
import Toast from "react-native-toast-message";
import { getRandomColorVariation, randomRoundedBetween } from "../util/random";
import ConfirmationModal from "../components/ui/ConfirmationModal";

const AdminScreen = ({ navigation }) => {
  const defaultModalMessage = "Are you sure you want to perform this action?";
  const defaultToastObj = {
    type: "success",
    position: "top",
    text1: selectedTable,
    text2: `Reinitialized `,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    onShow: () => console.log("Toast shown"),
    onHide: () => console.log("Toast hidden"),
    onPress: () => console.log("Toast pressed"),
  };
  const [selectedTable, setSelectedTable] = useState(null);
  const defaultMsg = "make a query"
  const [data, setData] = useState(defaultMsg);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFunction, setModalFunction] = useState(() =>
    console.log("modal function")
  );
  const [modalText, setModalText] = useState(defaultModalMessage);
  const ctx = useContext(AppContext);
  const { dispatch, playSoundFile, state, tables } = ctx;
  const {
    hourly_income_table,
    one_time_income_table,
    one_time_expense_table,
    settings_table,
    interval_table,
    event_table,
  } = tables;
  const table_map = {
    hourly_income_table: hourly_income_table,
    settings_table: settings_table,
    interval_table: interval_table,
    event_table: event_table,
    one_time_income_table: one_time_income_table,
    one_time_expense_table: one_time_expense_table,
  };
  const {
    currentLanguage,
    language,
    sound,
    theme,
    notifications,
    currency,
    settings,
    intervals,
    categories,
  } = state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;

  // Utility function to pick a random item's ID from an array
  const getRandomIdFromArray = (arr) => {
    const index = getRandomInt(0, arr.length - 1);
    return arr[index].id;
  };

  const generateDummyEvents = async (numberOfEvents = 50) => {
    for (let i = 0; i < numberOfEvents; i++) {
      const date = new Date(2023, getRandomInt(0, 11), getRandomInt(1, 28))
        .toISOString()
        .split("T")[0];
      const timestamp = +new Date(date);

      const eventTypes = [
        "hourly_income_id",
        "one_time_income_id",
        "one_time_expense_id",
      ];
      const selectedTypeKey =
        eventTypes[getRandomInt(0, eventTypes.length - 1)];

      const itemToAdd = {
        date,
        timestamp,
        event_type_key: selectedTypeKey,
        type: selectedTypeKey.includes("expense") ? "expense" : "income",
        amount:
          selectedTypeKey !== "hourly_income_id"
            ? getRandomInt(100, 1000)
            : null,
        note: selectedTypeKey === "one_time_expense_id" ? "Dummy note" : null,
        hourly_income_id:
          selectedTypeKey === "hourly_income_id"
            ? getRandomIdFromArray(hourlyIncomes)
            : null,
        interval_id:
          selectedTypeKey === "hourly_income_id"
            ? getRandomIdFromArray(intervals)
            : null,
        one_time_income_id:
          selectedTypeKey === "one_time_income_id"
            ? getRandomIdFromArray(oneTimeIncomes)
            : null,
        one_time_expense_id:
          selectedTypeKey === "one_time_expense_id"
            ? getRandomIdFromArray(oneTimeExpenses)
            : null,
      };

      // You can replace this console.log with your createNewRow function call
      const result = await event_table.createNewRow(itemToAdd);
      console.log("event add result ", result);

      // Uncomment this line and implement createNewRow function with your database logic
      // await createNewRow(itemToAdd);
    }

    const count = await event_table.getRowCount();
    console.log("count", count);
  };

  const performTableReInit = async (table) => await table.reinitializeDb();
  const performTableDrop = async (table) => await table.dropTable();
  const getAllRows = async (table, tableName = "table") => {
    const result = await table.getAllRows();
    console.log(`table ${tableName} all rows `, result);
    setData(result);
  };
  // const stageGenerateEvents = () => {
  //   setModalFunction(() => async () => {
  //     const res = await generateDummyEvents(50);
  //     const newEvents = await event_table.getAllRows();
  //     console.log("newEvents ", newEvents.length);
  //     dispatch({ type: "UPDATE_EVENTS", events: newEvents });
  //     setModalVisible(false);
  //     Toast.show({
  //       ...defaultToastObj,
  //       ...{
  //         text1: "Events table",
  //         text2: `50 events generated `,
  //       },
  //     });
  //     setData(newEvents);
  //   });
  //   setModalText(`Create 50 random events? `);
  //   setModalVisible(true);
  // };
  // const stageTableInit = () => {
  //   setModalFunction(() => async () => {
  //     const res = await performTableReInit(table_map[selectedTable]);
  //     setModalVisible(false);
  //     Toast.show({
  //       ...defaultToastObj,
  //       ...{
  //         text1: selectedTable,
  //         text2: `Reinitialized `,
  //       },
  //     });
  //   });
  //   setModalText(`Reinitialize ${selectedTable}? `);
  //   setModalVisible(true);
  // };
  // const stageTableDrop = () => {
  //   setModalFunction(() => async () => {
  //     const res = await performTableDrop(table_map[selectedTable]);
  //     setModalVisible(false);
  //     Toast.show({
  //       ...defaultToastObj,
  //       ...{
  //         text1: selectedTable,
  //         text2: `Dropped! `,
  //       },
  //     });
  //   });
  //   setModalText(`Drop (delete permanently) ${selectedTable}? `);
  //   setModalVisible(true);
  // };
  // const stageDeleteAllRows = () => {
  //   setModalFunction(() => async () => {
  //     const res = await deleteAllRows(table_map[selectedTable], selectedTable);
  //     setModalVisible(false);
  //     Toast.show({
  //       ...defaultToastObj,
  //       ...{
  //         text1: selectedTable,
  //         text2: `All rows deleted `,
  //       },
  //     });
  //     const newRows = await getAllRows(table_map[selectedTable], selectedTable);
  //     setData(newRows || []);
  //   });
  //   setModalText(`Delete all rows from ${selectedTable}? `);
  //   setModalVisible(true);
  // };
  // const stageCreateRandomIntervals = () => {
  //   setModalFunction(() => async () => {
  //     const res = await createRandomIntervals();
  //     const newIntervals = await interval_table.getAllRows();
  //     console.log("newIntervals ", newIntervals.length);
  //     dispatch({ type: "UPDATE_INTERVALS", intervals: newIntervals });
  //     setModalVisible(false);
  //     Toast.show({
  //       ...defaultToastObj,
  //       ...{
  //         text1: "RandomIntervals",
  //         text2: "5 RandomIntervals creation complete ..",
  //       },
  //     });
  //   });
  //   setModalText(`Create 5 RandomIntervals? `);
  //   setModalVisible(true);
  // };
  // const stagePreloadHourlyIncomes = () => {
  //   setModalFunction(() => async () => {
  //     const res = await preloadHourlyIncomes();
  //     const newHourlyIncomes = await hourly_income_table.getAllRows();
  //     console.log("newHourlyIncomes ", newHourlyIncomes.length);
  //     dispatch({
  //       type: "UPDATE_ITEMS",
  //       items: newHourlyIncomes,
  //       key: "hourlyIncomes",
  //     });

  //     setModalVisible(false);
  //     Toast.show({
  //       ...defaultToastObj,
  //       ...{
  //         text1: "Hourly incomes",
  //         text2: "Hourly incomes preloading complete ..",
  //       },
  //     });
  //     setData(newHourlyIncomes);
  //   });
  //   setModalText(`Preload data for Hourly incomes? `);
  //   setModalVisible(true);
  // };
  // const stagePreloadOneTimeIncomes = () => {
  //   setModalFunction(() => async () => {
  //     const res = await preloadOneTimeIncomes();
  //     const newOneTimeIncomes = await one_time_income_table.getAllRows();
  //     console.log("newOneTimeIncomes ", newOneTimeIncomes.length);
  //     dispatch({
  //       type: "UPDATE_ITEMS",
  //       items: newOneTimeIncomes,
  //       key: "oneTimeIncomes",
  //     });
  //     setModalVisible(false);
  //     Toast.show({
  //       ...defaultToastObj,
  //       ...{
  //         text1: "OneTimeIncomes",
  //         text2: "OneTimeIncomes preloading complete ..",
  //       },
  //     });
  //     setData(newOneTimeIncomes);
  //   });
  //   setModalText(`Preload data for OneTimeIncomes? `);
  //   setModalVisible(true);
  // };
  // const stagePreloadOneTimeExpenses = () => {
  //   setModalFunction();
  //   setModalText(`Preload data forOneTime Expenses? `);
  //   setModalVisible(true);
  // };
  const executeCreateRandomEvents = () => async () => {
    const res = await generateDummyEvents(50);
    const newEvents = await event_table.getAllRows();
    console.log("newEvents ", newEvents.length);
    dispatch({ type: "UPDATE_EVENTS", events: newEvents });
    setModalVisible(false);
    Toast.show({
      ...defaultToastObj,
      ...{
        text1: "Events table",
        text2: `50 events generated `,
      },
    });
    setData(newEvents);
  };
  const executeTableReInit = () => async () => {
    const res = await performTableReInit(table_map[selectedTable]);
    setModalVisible(false);
    Toast.show({
      ...defaultToastObj,
      ...{
        text1: selectedTable,
        text2: `Reinitialized `,
      },
    });
  };
  const executeTableDrop = () => async () => {
    const res = await performTableDrop(table_map[selectedTable]);
    setModalVisible(false);
    Toast.show({
      ...defaultToastObj,
      ...{
        text1: selectedTable,
        text2: `Dropped! `,
      },
    });
  };
  const executeDeleteAllRows = () => async () => {
    const res = await deleteAllRows(table_map[selectedTable], selectedTable);
    setModalVisible(false);
    Toast.show({
      ...defaultToastObj,
      ...{
        text1: selectedTable,
        text2: `All rows deleted `,
      },
    });
    const newRows = await getAllRows(table_map[selectedTable], selectedTable);
    setData(newRows || []);
  };
  const stageOperation = ({ modalFunc, modalText }) => {
    setModalFunction(modalFunc);
    setModalText(modalText);
    setModalVisible(true);
  };
  const executeCreateRandomIntervals = () => async () => {
    const res = await createRandomIntervals();
    const newIntervals = await interval_table.getAllRows();
    console.log("newIntervals ", newIntervals.length);
    dispatch({ type: "UPDATE_INTERVALS", intervals: newIntervals });
    setModalVisible(false);
    Toast.show({
      ...defaultToastObj,
      ...{
        text1: "RandomIntervals",
        text2: "5 RandomIntervals creation complete ..",
      },
    });
  };
  const executePreloadHourlyIncomes = () => async () => {
    const res = await preloadHourlyIncomes();
    const newHourlyIncomes = await hourly_income_table.getAllRows();
    console.log("newHourlyIncomes ", newHourlyIncomes.length);
    dispatch({
      type: "UPDATE_ITEMS",
      items: newHourlyIncomes,
      key: "hourlyIncomes",
    });

    setModalVisible(false);
    Toast.show({
      ...defaultToastObj,
      ...{
        text1: "Hourly incomes",
        text2: "Hourly incomes preloading complete ..",
      },
    });
    setData(newHourlyIncomes);
  };
  const executePreloadOneTimeIncomes = () => async () => {
    const res = await preloadOneTimeIncomes();
    const newOneTimeIncomes = await one_time_income_table.getAllRows();
    console.log("newOneTimeIncomes ", newOneTimeIncomes.length);
    dispatch({
      type: "UPDATE_ITEMS",
      items: newOneTimeIncomes,
      key: "oneTimeIncomes",
    });
    setModalVisible(false);
    Toast.show({
      ...defaultToastObj,
      ...{
        text1: "OneTimeIncomes",
        text2: "OneTimeIncomes preloading complete ..",
      },
    });
    setData(newOneTimeIncomes);
  };
  const executePreloadOneTimeExpenses = () => async () => {
    const res = await preloadOneTimeExpenses();
    const OneTimeExpenses = await one_time_expense_table.getAllRows();
    console.log("newOneTimeIncomes ", OneTimeExpenses.length);
    dispatch({
      type: "UPDATE_ITEMS",
      items: OneTimeExpenses,
      key: "oneTimeExpenses",
    });
    setModalVisible(false);
    Toast.show({
      ...defaultToastObj,
      ...{
        text1: "OneTime Expenses",
        text2: "OneTime Expenses preloading complete ..",
      },
    });
    setData(OneTimeExpenses);
  };
  const deleteAllRows = async (table, tableName = "table") =>
    await table.deleteAllRows();

  const fetchSchema = async (table, tableName = "table") => {
    const schema = await table.getSchema();
    console.log(`schema ${tableName}  `, schema);
    setData(schema);
  };
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomMinute = () => {
    const minutesArray = [0, 15, 30, 45];
    return minutesArray[Math.floor(Math.random() * minutesArray.length)];
  };

  const generateISOTimeString = (hour, minute) => {
    const date = new Date();
    date.setHours(hour, minute, 0, 0);
    return date.toISOString();
  };

  const createRandomIntervals = async () => {
    for (let i = 0; i < 5; i++) {
      const startHour = getRandomInt(0, 22); // Random start hour between 0 to 22
      const endHour = getRandomInt(startHour + 1, Math.min(startHour + 10, 23)); // Ensuring it's at least 1 hour apart but less than 10

      const startMinute = getRandomMinute();
      const endMinute = getRandomMinute();

      const startTime = generateISOTimeString(startHour, startMinute);
      const endTime = generateISOTimeString(endHour, endMinute);

      const itemToAdd = {
        startTime,
        endTime,
      };

      try {
        const result = await interval_table.createNewRow(itemToAdd);
        console.log("Inserted: ", result);
      } catch (error) {
        console.error("Error inserting interval:", error);
      }
    }
  };

  const preloadHourlyIncomes = async () => {
    console.log("preload Hourly Incomes ", default_HourlyIncomes.length);
    let successCount = 0;
    let failCount = 0;
    let alreadyExistsCount = 0;

    for (let HourlyIncome of default_HourlyIncomes) {
      HourlyIncome.color = getRandomColorVariation();
      HourlyIncome.rate = randomRoundedBetween(1200, 2500, 50);
      try {
        const result = await hourly_income_table.getFirstRowByField(
          "translation_key",
          HourlyIncome.translation_key
        );
        if (!result) {
          await hourly_income_table.createNewRow(HourlyIncome);
          console.log(
            `HourlyIncome ${HourlyIncome.description} inserted successfully.`
          );
          successCount++;
        } else {
          console.log(`${HourlyIncome.description} already exists`);
          alreadyExistsCount++;
        }
      } catch (error) {
        console.error(
          `Failed to insert HourlyIncome ${HourlyIncome.description}:`,
          error
        );
        failCount++;
      }
    }

    // Show toast based on the operations
    if (successCount > 0) {
      Toast.show({
        type: "success",
        text1: `${successCount} Hourly Incomes inserted successfully!`,
      });
    }

    if (failCount > 0) {
      Toast.show({
        type: "error",
        text1: `Failed to insert ${failCount} Hourly Incomes!`,
        text2: "Check logs for more details.",
      });
    }

    if (alreadyExistsCount > 0) {
      Toast.show({
        type: "info",
        text1: `${alreadyExistsCount} Hourly Incomes already exist.`,
        text2: "No new Hourly Incomes were added for these.",
      });
    }
  };

  const preloadOneTimeIncomes = async () => {
    console.log("default_OneTimeIncomes ", default_OneTimeIncomes.length);
    let successCount = 0;
    let failCount = 0;
    let alreadyExistsCount = 0;

    for (let OneTimeIncome of default_OneTimeIncomes) {
      try {
        const result = await one_time_income_table.getFirstRowByField(
          "description",
          OneTimeIncome.description
        );
        if (!result) {
          OneTimeIncome.color = getRandomColorVariation();
          OneTimeIncome.amount = randomRoundedBetween(500, 40000, 50);
          await one_time_income_table.createNewRow(OneTimeIncome);
          console.log(
            `OneTimeIncome ${OneTimeIncome.description} inserted successfully.`
          );
          successCount++;
        } else {
          console.log(`${OneTimeIncome.description} already exists`);
          alreadyExistsCount++;
        }
      } catch (error) {
        console.error(
          `Failed to insert OneTimeIncome ${OneTimeIncome.description}:`,
          error
        );
        failCount++;
      }
    }

    // Show toast based on the operations
    if (successCount > 0) {
      Toast.show({
        type: "success",
        text1: `${successCount} OneTimeIncomes inserted successfully!`,
      });
    }

    if (failCount > 0) {
      Toast.show({
        type: "error",
        text1: `Failed to insert ${failCount} Hourly Incomes!`,
        text2: "Check logs for more details.",
      });
    }

    if (alreadyExistsCount > 0) {
      Toast.show({
        type: "info",
        text1: `${alreadyExistsCount} OneTimeIncomes already exist.`,
        text2: "No new OneTimeIncomes were added for these.",
      });
    }
  };

  const preloadOneTimeExpenses = async () => {
    console.log("default_OneTime Expenses ", default_OneTimeExpenses.length);
    let successCount = 0;
    let failCount = 0;
    let alreadyExistsCount = 0;

    for (let OneTimeExpense of default_OneTimeExpenses) {
      try {
        const result = await one_time_expense_table.getFirstRowByField(
          "description",
          OneTimeExpense.description
        );
        if (!result) {
          OneTimeExpense.color = getRandomColorVariation();
          OneTimeExpense.amount = randomRoundedBetween(500, 40000, 50);
          await one_time_expense_table.createNewRow(OneTimeExpense);
          console.log(
            `OneTimeExpense ${OneTimeExpense.description} inserted successfully.`
          );
          successCount++;
        } else {
          console.log(`${OneTimeExpense.description} already exists`);
          alreadyExistsCount++;
        }
      } catch (error) {
        console.error(
          `Failed to insert HourlyExpense ${OneTimeExpense.description}:`,
          error
        );
        failCount++;
      }
    }

    // Show toast based on the operations
    if (successCount > 0) {
      Toast.show({
        type: "success",
        text1: `${successCount} HourlyExpenses inserted successfully!`,
      });
    }

    if (failCount > 0) {
      Toast.show({
        type: "error",
        text1: `Failed to insert ${failCount} HourlyExpenses!`,
        text2: "Check logs for more details.",
      });
    }

    if (alreadyExistsCount > 0) {
      Toast.show({
        type: "info",
        text1: `${alreadyExistsCount} HourlyExpenses already exist.`,
        text2: "No new HourlyExpenses were added for these.",
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View
        // style={{
        //   flex: 1,
        //   flexDirection: "row",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <Button onPress={() => setData(ctx)} shape="pill">
          Show ctx
        </Button>
        <RNPickerSelect
          onValueChange={(itemValue, itemIndex) => {
            setSelectedTable(table_map[itemValue] ? itemValue : null)
            table_map[itemValue] ? getAllRows(table_map[itemValue], itemValue) : setData(defaultMsg)
            
          }}
            items={[
                { label: 'Settings Table', value: 'settings_table' },
                { label: 'Interval Table', value: 'interval_table' },
                { label: 'Hourly Income Table', value: 'hourly_income_table'},
                { label: 'One Time Income Table', value: 'one_time_income_table' },
                { label: 'One Time Expense Table', value: 'one_time_expense_table' },
                { label: 'Settings Table', value: 'settings_table' },
                { label: 'Event Table', value: 'event_table' },
                // ... other items
            ]}
            style={{ paddingBottom: 10 }}
        />
        {/* <Picker
          zIndex: Platform.OS === 'ios' ? 1 : 0
          selectedValue={selectedTable}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedTable(itemValue)
            if (table_map[itemValue]) getAllRows(table_map[itemValue], itemValue)
            
          }}
        >
          <Picker.Item label="Select table" value={null} />
          <Picker.Item label="Settings Table" value="settings_table" />
          <Picker.Item
            label="Hourly Income Table"
            value="hourly_income_table"
          />
          <Picker.Item label="Interval Table" value="interval_table" />
          <Picker.Item label="Event Table" value="event_table" />
          <Picker.Item
            label="One Time Income Table"
            value="one_time_income_table"
          />
          <Picker.Item
            label="One Time Expense Table"
            value="one_time_expense_table"
          />
        </Picker> */}
      </View>
      {selectedTable && (
        <View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              onPress={() =>
                fetchSchema(table_map[selectedTable], selectedTable)
              }
              shape="pill"
            >
  Schema
            </Button>
            <Button
              onPress={() =>
                getAllRows(table_map[selectedTable], selectedTable)
              }
              shape="pill"
            >
              All rows
            </Button>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {selectedTable === "hourly_income_table" && (
              <Button
                onPress={() =>
                  stageOperation({
                    modalFunc: executePreloadHourlyIncomes,
                    modalText: "Preload data for Hourly Incomes?",
                  })
                }
                shape="pill"
              >
                Preload Hourly Incomes
              </Button>
            )}
            {selectedTable === "one_time_income_table" && (
              <Button
                onPress={() =>
                  stageOperation({
                    modalFunc: executePreloadOneTimeIncomes,
                    modalText: "Preload data for One Time Incomes?",
                  })
                }
                shape="pill"
              >
                Preload One Time Incomes
              </Button>
            )}
            {selectedTable === "one_time_expense_table" && (
              <Button
                onPress={() =>
                  stageOperation({
                    modalFunc: executePreloadOneTimeExpenses,
                    modalText: "Preload data forOneTime Expenses?",
                  })
                }
                shape="pill"
              >
                Preload One Time Expenses
              </Button>
            )}
            {selectedTable === "interval_table" && (
              <Button
                onPress={() =>
                  stageOperation({
                    modalFunc: executeCreateRandomIntervals,
                    modalText: "Create 5 random intervals?",
                  })
                }
                shape="pill"
              >
                Create 5 Random intervals
              </Button>
            )}
            {selectedTable === "event_table" && (
              <Button
                onPress={() =>
                  stageOperation({
                    modalFunc: executeCreateRandomEvents,
                    modalText: "Create 50 random events?",
                  })
                }
                shape="pill"
              >
                Create 50 dummy events for this year
              </Button>
            )}
            <Button
              onPress={() =>
                stageOperation({
                  modalFunc: executeDeleteAllRows,
                  modalText: `Delete all rows for ${selectedTable}`,
                })
              }
              shape="pill"
            >
              Delete all rows
            </Button>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onPress={() =>
                stageOperation({
                  modalFunc: executeTableReInit,
                  modalText: `Reinit ${selectedTable}`,
                })
              }
              shape="pill"
            >
              Reinitialize 
            </Button>
            <Button
              onPress={() =>
                stageOperation({
                  modalFunc: executeTableDrop,
                  modalText: `Drop (delete) ${selectedTable}`,
                })
              }
              shape="pill"
            >
              Drop (delete) 
            </Button>

            {/* <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 300,
                padding: 20,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <Text>
                `Are you sure you want to reinitialize the ${selectedTable}{" "}
                database?
              </Text>
              <Button onPress={handleConfirm} shape="pill">
                Confirm
              </Button>
              <Button onPress={() => setModalVisible(false)} shape="pill">
                Cancel
              </Button>
            </View>
          </View>
        </Modal> */}
          </View>

          <ConfirmationModal
            modalVisible={modalVisible}
            onConfirm={() => modalFunction()}
            onCancel={() => setModalVisible(false)}
            confirmText="Confirm"
            cancelText="Cancel"
            message={modalText}
          />
          <Toast
            style={{
              elevation: 20, //Render the Toast component in your app's entry file, as the LAST CHILD in the View hierarchy
            }}
          />
        </View>
      )}
      <View>
        <JSONTree data={data} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollViewContent: {
    // Apply the styles you need for the content inside the scroll view
    // For example, you might want to add padding or specific alignment
    padding: 16,
    paddingBottom: 50, // Add padding at the bottom for better visual spacing
  },
  container: {
    flex: 1,
    padding: 20,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 16,
  },
});
export default AdminScreen;
