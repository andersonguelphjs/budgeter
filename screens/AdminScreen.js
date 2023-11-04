import React, { useContext, useState } from "react";
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

const AdminScreen = ({ navigation }) => {
  const [selectedTable, setSelectedTable] = useState("settings_table");
  const [data, setData] = useState("make a query");
  const [modalVisible, setModalVisible] = useState(false);
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
  const {hourlyIncomes, oneTimeIncomes, oneTimeExpenses}= categories;

  // Utility function to get a random integer between min and max
  // Utility function to pick a random item's ID from an array
  const getRandomIdFromArray = (arr) => {
    const index = getRandomInt(0, arr.length - 1);
    return arr[index].id;
  };
  
  // This function should insert a new row into your events table.
  // You'll need to implement it according to your database logic.
  const createNewRow = async (itemToAdd) => {
    const db = SQLite.openDatabase('your-database-name.db');
    const fields = Object.keys(itemToAdd).join(', ');
    const values = Object.values(itemToAdd).map((_) => '?').join(', ');
  
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO events_table (${fields}) VALUES (${values});`,
          Object.values(itemToAdd),
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
  };
  
  // Function to create dummy data
  const generateDummyEvents = async (numberOfEvents = 50) => {
    for (let i = 0; i < numberOfEvents; i++) {
      const date = new Date(2023, getRandomInt(0, 11), getRandomInt(1, 28)).toISOString().split('T')[0];
      const timestamp = +new Date(date);
      
      const eventTypes = ['hourly_income_id', 'one_time_income_id', 'one_time_expense_id'];
      const selectedTypeKey = eventTypes[getRandomInt(0, eventTypes.length - 1)];
      
      const itemToAdd = {
        date,
        timestamp,
        event_type_key: selectedTypeKey,
        type: selectedTypeKey.includes('expense') ? 'expense' : 'income',
        amount: selectedTypeKey !== 'hourly_income_id' ? getRandomInt(100, 1000) : null,
        note: selectedTypeKey === 'one_time_expense_id' ? 'Dummy note' : null,
        hourly_income_id: selectedTypeKey === 'hourly_income_id' ? getRandomIdFromArray(hourlyIncomes) : null,
        interval_id: selectedTypeKey === 'hourly_income_id' ? getRandomIdFromArray(intervals) : null,
        one_time_income_id: selectedTypeKey === 'one_time_income_id' ? getRandomIdFromArray(oneTimeIncomes) : null,
        one_time_expense_id: selectedTypeKey === 'one_time_expense_id' ? getRandomIdFromArray(oneTimeExpenses) : null,
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
  


  const performDBReinit = async (table, tableName = "table") => {
    const reinit = await table.reinitializeDb();
    console.log(`table ${tableName} reinit `, reinit);
  };
  const getAllRows = async (table, tableName = "table") => {
    const result = await table.getAllRows();
    console.log(`table ${tableName} all rows `, result);
    setData(result);
  };
  const deleteAllRows = async (table, tableName = "table") => {
    const result = await table.deleteAllRows();
    console.log(`table ${tableName} delete all rows `, result);
    Toast.show({
      type: "success",
      text1: `${tableName} HourlyIncomes deleted!`,
    });
  };
  const handleConfirm = () => {
    // Call your function here
    performDBReinit(table_map[selectedTable], selectedTable);
    // Close the modal
    setModalVisible(false);
  };
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
    console.log("preload HourlyIncomes ", default_HourlyIncomes.length);
    let successCount = 0;
    let failCount = 0;
    let alreadyExistsCount = 0;

    for (let HourlyIncome of default_HourlyIncomes) {
      HourlyIncome.color = getRandomColorVariation();
      HourlyIncome.rate = randomRoundedBetween(1200, 2500, 50);
      try {
        const result = await hourly_income_table.getRowByField(
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
        text1: `${successCount} HourlyIncomes inserted successfully!`,
      });
    }

    if (failCount > 0) {
      Toast.show({
        type: "error",
        text1: `Failed to insert ${failCount} HourlyIncomes!`,
        text2: "Check logs for more details.",
      });
    }

    if (alreadyExistsCount > 0) {
      Toast.show({
        type: "info",
        text1: `${alreadyExistsCount} HourlyIncomes already exist.`,
        text2: "No new HourlyIncomes were added for these.",
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
        const result = await one_time_income_table.getRowByField(
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
          `Failed to insert HourlyIncome ${OneTimeIncome.description}:`,
          error
        );
        failCount++;
      }
    }

    // Show toast based on the operations
    if (successCount > 0) {
      Toast.show({
        type: "success",
        text1: `${successCount} HourlyIncomes inserted successfully!`,
      });
    }

    if (failCount > 0) {
      Toast.show({
        type: "error",
        text1: `Failed to insert ${failCount} HourlyIncomes!`,
        text2: "Check logs for more details.",
      });
    }

    if (alreadyExistsCount > 0) {
      Toast.show({
        type: "info",
        text1: `${alreadyExistsCount} HourlyIncomes already exist.`,
        text2: "No new HourlyIncomes were added for these.",
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
        const result = await one_time_expense_table.getRowByField(
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
  const table_map = {
    hourly_income_table: hourly_income_table,
    settings_table: settings_table,
    interval_table: interval_table,
    event_table: event_table,
    one_time_income_table: one_time_income_table,
    one_time_expense_table: one_time_expense_table,
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Select Table:</Text>
        <Picker
          selectedValue={selectedTable}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setSelectedTable(itemValue)}
        >
          <Picker.Item label="Settings Table" value="settings_table" />
          <Picker.Item label="HourlyIncome Table" value="hourly_income_table" />
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
        </Picker>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button onPress={() => setData(ctx)} shape="pill">
          Show ctx
        </Button>
        <Button
          onPress={() => fetchSchema(table_map[selectedTable], selectedTable)}
          shape="pill"
        >
          Get schema
        </Button>
        <Button
          onPress={() => getAllRows(table_map[selectedTable], selectedTable)}
          shape="pill"
        >
          Get all rows
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
          <Button onPress={preloadHourlyIncomes} shape="pill">
            Preload HourlyIncomes
          </Button>
        )}
        {selectedTable === "one_time_income_table" && (
          <Button onPress={preloadOneTimeIncomes} shape="pill">
            preloadOneTimeIncomes
          </Button>
        )}
        {selectedTable === "one_time_expense_table" && (
          <Button onPress={preloadOneTimeExpenses} shape="pill">
            preloadOneTimeExpenses
          </Button>
        )}
        {selectedTable === "interval_table" && (
          <Button onPress={createRandomIntervals} shape="pill">
            Preload intervals
          </Button>
        )}

        <Button
          onPress={() => deleteAllRows(table_map[selectedTable], selectedTable)}
          shape="pill"
        >
          Delete all rows
        </Button>
        <Button
          onPress={() => generateDummyEvents(50)}
          shape="pill"
        >
          Create dummy events
        </Button>
        
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onPress={() => setModalVisible(true)} shape="pill">
          Reinitialize DB
        </Button>
        <Modal
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
        </Modal>
      </View>
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
