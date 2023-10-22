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
import TimePicker from "../TimePicker/TimePicker";

const ItemList = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const ctx = useContext(AppContext);
  console.log("ItemList ", Object.keys(ctx));
  const {
    state,
    dispatch,
    createNewCategoryRow,
    updateCategoryRow,
    deleteCategoryRow,
    getCategoryRowById,
    getAllCategoryRows,
    deleteAllCategoryRows,
    playSoundFile
  } = ctx;
  const debouncedUpdate = _.debounce(updateCategoryRow, 3000); // 3000 milliseconds = 3 seconds

  const { currentLanguage, language } = state;
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [newItemType, setNewItemType] = useState("expense");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const allCategories = async () => {
      console.log(allCategories);
      const result = await getAllCategoryRows();
      console.log(result);
      setItems(result && result.length ? result : []);
      playSoundFile(null, 1)
    };
    allCategories();
  }, []);
  const toggleNewItemType = () => {
    setNewItemType((prev) => (prev === "expense" ? "income" : "expense"));
    playSoundFile(null, 7)
  };
  const toggleExistingItemType = async (index) => {
    let newItems = [...items];
    newItems[index].type =
      newItems[index].type === "expense" ? "income" : "expense";
    const result = await updateCategoryRow(newItems[index].id, {
      type: newItems[index].color,
    });
    playSoundFile(null, 6)

    setItems(newItems);
  };
  const deleteItem = async (index) => {
    const newItems = items.filter((_, i) => i !== index);
    const result = await deleteCategoryRow(index);
    playSoundFile(null, 5)
    setItems(newItems);
  };

  const startEditing = (index) => {
    setEditIndex(index);
  };

  const editExistingText = async (text) => {
    const newItems = [...items];
    newItems[editIndex].description = text;
    setItems(newItems);
    try {
      await debouncedUpdate(newItems[editIndex].id, {
        description: newItems[editIndex].description,
      });
      playSoundFile(null, 4)
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
      type: newItemType,
    };
    console.log("adding new item ", itemToAdd);
    const result = await createNewCategoryRow(itemToAdd);
    playSoundFile(null, 2)
    console.log("result", result);
    setItems((currentItems) => [...currentItems, { id: result, ...itemToAdd }]);
    setNewItem("");
  };

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
  };

  const changeColor = async (index) => {
    let newItems = [...items];
    newItems[index].color = getRandomColor();
    const result = await updateCategoryRow(newItems[index].id, {
      color: newItems[index].color,
    });
    playSoundFile(null, 3)

    setItems(newItems);
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

        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={[styles.colorCircle, { backgroundColor: item.color }]}
            onPress={() => changeColor(index)}
          />
          <TouchableOpacity onPress={() => toggleExistingItemType(index)}>
            <Ionicons
              name={item.type === "expense" ? "bar-chart" : "pie-chart"}
              size={24}
              color="blue"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteItem(index)}>
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

  return (
    <View style={styles.container}>
            <TouchableOpacity onPress={toggleCollapse} style={styles.collapseButton}>
      <Text style={styles.collapseButtonText}>
        {isCollapsed ? "Categories" : "Hide Categories"}
      </Text>
    </TouchableOpacity>
    {!isCollapsed && (
        <View>
      <FlatList
        data={items}
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
          placeholder={language[currentLanguage].add_category}
        />

        <Button onPress={toggleNewItemType} shape="pill" backgroundColor="#fff">
          <Ionicons
            name={newItemType === "expense" ? "bar-chart" : "pie-chart"}
            size={24}
            color="blue"
          />
        </Button>
        <Button onPress={addNewItem} shape="pill">
          <Ionicons name="add" size={24} color="#fff" />
        </Button>
      </View>
      <View style={styles.inputContainer}>
        <TimePicker />
      </View>
      </View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8", // Added for clarity of layout bounds
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

export default ItemList;
