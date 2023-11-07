import React, { useState, useContext, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../ui/Button";
import ConfirmationModal from "../ui/ConfirmationModal";
import Toast from "react-native-toast-message";
import _ from "lodash";
import { defaultToastObj } from "../../util/ui";
const GenericList = ({
  itemKey,
  title,
  items,
  table,
  translation,
  dispatch,
  playSoundFile,
  onItemDelete,
  state,
  amountOrRate,
  placeholderText,
  text_key,
  foreign_key,
  modalText = "Delet this item?",
  currentTheme
}) => {
  const styles = StyleSheet.create({
    container: {
   
    },
    collapseButton: {
  
    },
    collapseButtonText: {
      color: currentTheme.text
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
      borderWidth: 1,  // This sets the border width
      borderColor: 'black',
    },
    itemText: {
      fontSize: 18,

    },
    iconsContainer: {
      flexDirection: "row",
    },
    itemInput: {
      padding: 0,
      borderBottomWidth: 1,
      borderBottomColor: "black",
      minWidth: "30%"
    },
    inputContainer: {
      flexDirection: "row",
      padding: 0,
      backgroundColor: "#fff",
      borderRadius: 10,
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

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const debouncedUpdate = _.debounce(table.updateRow, 3000); // 3000 milliseconds = 3 seconds

  const { settings } = state;
  const { language } = settings;
  const [newItem, setNewItem] = useState("");
  const [newRate, setNewRate] = useState(0);
  const [editIndex, setEditIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const initiateDeleteItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  console.log("selectedItem ", selectedItem);
  
  const deleteItem = async () => {
    if (!selectedItem) return;

    console.log("deleteItem itemId", selectedItem);

    if (onItemDelete && typeof onItemDelete === "function") {
      const obj = {
        item: selectedItem,
        foreign_key: foreign_key,
        table: table,
        categories_key: itemKey,
        category_items: items,
      };

      onItemDelete(obj);
    }
    closeModal();
    Toast.show(defaultToastObj);
  };

  const startEditing = (index) => {
    setEditIndex(index);
  };

  const editExistingText = async (text) => {
    const newItems = [...items];
    newItems[editIndex].description = text;
    dispatch({ type: "UPDATE_ITEMS", items: newItems, key: itemKey });
;
    try {
      const result = await debouncedUpdate(newItems[editIndex].id, {
        description: newItems[editIndex].description,
      });
      console.log("update text result ", result);
      playSoundFile(null, 4);
    } catch (error) {
      console.error("An error occurred:", error);
    }
    // setEditIndex(null); // Close the editor
  };

  const editRate = async (type, text) => {
    const newItems = [...items];

    newItems[editIndex][amountOrRate] = text;
    dispatch({ type: "UPDATE_ITEMS", items: newItems, key: itemKey });

    try {
      const result = await debouncedUpdate(newItems[editIndex].id, {
        [amountOrRate]: newItems[editIndex][amountOrRate],
      });
      console.log("HourlyIncome update editRate result ", result);
      playSoundFile(null, 4);
    } catch (error) {
      console.error("An error occurred:", error);
    }

  };

  const addNewItem = async () => {
    if (newItem.trim() === "") return;
    const newColor = getRandomColor();
    const itemToAdd = {
      description: newItem,
      color: newColor,
      type: "expense",
      [amountOrRate]: newRate || 0,
    };
    console.log("adding new item ", itemToAdd);
    const result = await table.createNewRow(itemToAdd);
    console.log("add result ", result);
    playSoundFile(null, 2);
    console.log("result", result);
    // setItems((currentItems) => [...currentItems, { id: result, ...itemToAdd }]);
    dispatch({
      type: "UPDATE_ITEMS",
      items: [...currentItems, { id: result, ...itemToAdd }],
      key: itemKey,
    });
    setNewItem("");
  };

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
  };

  const changeColor = async (itemId, index) => {
    let newItems = [...items];
    const color = getRandomColor();
    console.log("changeColor ", itemId, index, color);
    newItems[index].color = color;
    const result = await table.updateRow(itemId, {
      color: color,
    });
    console.log("update color result ", result);
    playSoundFile(null, 3);
    dispatch({ type: "UPDATE_ITEMS", items: newItems, key: itemKey });
    // setItems(newItems);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.collapseButton}>
        <Text style={styles.collapseButtonText}>
          {isCollapsed ? title : `Hide ${title}`}
        </Text>
      </TouchableOpacity>
      {!isCollapsed && (
        <View>
          <View style={styles.listContent}>
            {items.map((item, index) => {
              const isEditing = editIndex === index;
              const amountOrRate = item.type === "expense" ? "amount" : "rate";

              return (
                <View key={index} style={styles.listItemContainer}>
                  {isEditing ? (
                    <TextInput
                      style={styles.itemInput}
                      value={item.description}
                      onChangeText={(text) => editExistingText(text, index)}
                    />
                  ) : (
                    <Text style={styles.itemText}>{item.description}</Text>
                  )}
                  {isEditing ? (
                    <TextInput
                      style={styles.itemInput}
                      keyboardType="numeric"
                      value={String(item[amountOrRate] || "")}
                      onChangeText={(text) => editRate(item.type, text, index)}
                    />
                  ) : (
                    <Text style={styles.itemText}>{item[amountOrRate]}</Text>
                  )}
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity
                      style={[
                        styles.colorCircle,
                        { backgroundColor: item.color },
                      ]}
                      onPress={() => changeColor(item.id, index)}
                    />
                    <TouchableOpacity
                      onPress={() => initiateDeleteItem(item.id, index)}
                    >
                      <Ionicons name="trash-outline" size={24} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        isEditing ? setEditIndex(null) : startEditing(index)
                      }
                    >
                      <Ionicons
                        name={
                          isEditing
                            ? "checkmark-circle-outline"
                            : "create-outline"
                        }
                        size={24}
                        color="blue"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>

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
              placeholder={translation[language][text_key]}
            />
            <Button onPress={addNewItem} shape="pill">
              <Ionicons name="add" size={24} color="#fff" />
            </Button>
          </View>
          <ConfirmationModal
            modalVisible={modalVisible}
            onConfirm={deleteItem}
            onCancel={closeModal}
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
    </View>
  );
};



export default GenericList;
