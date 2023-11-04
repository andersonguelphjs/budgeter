import React, { useState, useContext, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../../store/app-context";
import Button from "../ui/Button";
import _ from "lodash";

const HourlyIncomeList = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const ctx = useContext(AppContext);
  // console.log("HourlyIncomeList ", Object.keys(ctx?.state));
  const {
    state,
    dispatch,
    playSoundFile,
    hourly_income_table,
    translation,
  } = ctx;
  const { HourlyIncomes } = ctx.state;

  const debouncedUpdate = _.debounce(hourly_income_table.updateRow, 3000); // 3000 milliseconds = 3 seconds

  const { settings } = state;
  const { language } = settings;
  const [newItem, setNewItem] = useState("");
  const [newRate, setNewRate] = useState(0)
  const [editIndex, setEditIndex] = useState(null);
  console.log(translation);
  console.log(language);

  const deleteItem = async (itemId, index) => {
    console.log("deleteItem itemId", itemId)
    const newItems = HourlyIncomes.filter(i => i.id !== itemId);
    const result = await hourly_income_table.deleteRow(itemId);
    console.log("HourlyIncome delete result ",result)
    playSoundFile(null, 5);
    dispatch({ type: "UPDATE_HourlyIncomes", HourlyIncomes: newItems });
    //setItems(newItems);
  };

  const startEditing = (index) => {
    setEditIndex(index);
  };

  const editExistingText = async (text) => {
    const newItems = [...HourlyIncomes];
    newItems[editIndex].description = text;
    dispatch({ type: "UPDATE_HourlyIncomes", HourlyIncomes: newItems });
    //setItems(newItems);
    try {
      const result = await debouncedUpdate(newItems[editIndex].id, {
        description: newItems[editIndex].description,
      });
      console.log("HourlyIncome update text result ",result)
      playSoundFile(null, 4);
    } catch (error) {
      console.error("An error occurred:", error);
    }
    // setEditIndex(null); // Close the editor
  };

  const editRate = async (type, text) => {
    const newItems = [...HourlyIncomes];
    const field = "rate"
    newItems[editIndex][field] = text;
    dispatch({ type: "UPDATE_HourlyIncomes", HourlyIncomes: newItems });
    //setItems(newItems);
    try {
      const result = await debouncedUpdate(newItems[editIndex].id, {
        [field]: newItems[editIndex][field],
      });
      console.log("HourlyIncome update editRate result ",result)
      playSoundFile(null, 4);
    } catch (error) {
      console.error("An error occurred:", error);
    }
    // setEditIndex(null); // Close the editor
  };

  const addNewItem = async () => {
    if (newItem.trim() === "") return;
    const newColor = getRandomColor();
    const itemToAdd = {
      description: newItem,
      color: newColor,
      type: "expense",
      rate: newRate || 0, 
    };
    console.log("adding new item ", itemToAdd);
    const result = await hourly_income_table.createNewRow(itemToAdd);
    console.log("HourlyIncome add result ",result)
    playSoundFile(null, 2);
    console.log("result", result);
    // setItems((currentItems) => [...currentItems, { id: result, ...itemToAdd }]);
    dispatch({
      type: "UPDATE_HourlyIncomes",
      HourlyIncomes: [...currentItems, { id: result, ...itemToAdd }],
    });
    setNewItem("");
  };

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
  };

  const changeColor = async (itemId, index) => {
    
    let newItems = [...HourlyIncomes];
    const color = getRandomColor()
    console.log("changeColor ", itemId, index, color);
    newItems[index].color = color;
    const result = await hourly_income_table.updateRow(itemId, {
      color: color,
    });
    console.log("HourlyIncome update color result ",result)
    playSoundFile(null, 3);
    dispatch({ type: "UPDATE_HourlyIncomes", HourlyIncomes: newItems });
    // setItems(newItems);
  };

  const renderItem = ({ item, index }) => {
    const isEditing = editIndex === index;

    return (
      <View style={styles.listItemContainer}>
        {isEditing ? (
          <TextInput
            style={styles.itemInput}
            value={item.description}
            onChangeText={(text) => editExistingText(text)}
          />
        ) : (
          <Text style={styles.itemText}>{item.description}</Text>
        )}
        {isEditing ? (
          <TextInput
            style={styles.itemInput}
            keyboardType="numeric"
            value={item.type === "expense" ? String(item.amount || "") : String(item.rate || "")}
            onChangeText={(text) => editRate(item.type, text)}
          />
        ) : (
          <Text style={styles.itemText}>{item.type === "expense" ? item.amount : item.rate}</Text>
        )}
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={[styles.colorCircle, { backgroundColor: item.color }]}
            onPress={() => changeColor(item.id, index)}
          />
          <TouchableOpacity onPress={() => deleteItem(item.id, index)}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              isEditing ? setEditIndex(null) : startEditing(index)
            }
          >
            <Ionicons
              name={isEditing ? "checkmark-circle-outline" : "create-outline"}
              size={24}
              color="blue"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const rateText = "hourly_wage";
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.collapseButton}>
        <Text style={styles.collapseButtonText}>
          {isCollapsed ? "HourlyIncomes" : "Hide HourlyIncomes"}
        </Text>
      </TouchableOpacity>
      {!isCollapsed && (
        <View>
          <FlatList
            nestedScrollEnabled={true}
            data={HourlyIncomes}
            renderItem={renderItem}
            keyExtractor={(_, index) => String(index)}
            contentContainerStyle={styles.listContent}
          />

          {/* Input field and Add button */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newItem}
              onChangeText={setNewItem}
              placeholder={translation[language]["add_category"]}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={String(newRate)}
              onChangeText={setNewRate}
              placeholder={translation[language][rateText]}
            />
            <Button onPress={addNewItem} shape="pill">
              <Ionicons name="add" size={24} color="#fff" />
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 10, // Space around the FlatList items
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff", // Visual separation of list items
    marginBottom: 10, // Space between items
    borderRadius: 5, // Optional rounded corners for aesthetics
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  itemInput: {
    // Style for your input (if different from your regular items)
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HourlyIncomeList;
