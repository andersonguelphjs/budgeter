import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Button from "../ui/Button";
import ConfirmationModal from "../ui/ConfirmationModal";
import _ from "lodash";
const GenericList = (props) => {
  const {
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
    modalText = "Delete this item?",
    showingList,
    updateShowingList,
    styles,
  } = props;
  console.log(
    "gerneric",
    itemKey,
    title,
    items,
    amountOrRate,
    placeholderText,
    text_key,
    foreign_key,
    showingList
  );
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    updateShowingList((title !== showingList && title) || "");
  };
  useEffect(() => {
    setIsCollapsed(showingList !== title);
  }, [setIsCollapsed, showingList, updateShowingList, isCollapsed]);

  const screenHeight = Dimensions.get("window").height;
  let isLatestRequest = false;
  const debouncedUpdate = useCallback(
    _.debounce(async (id, data) => {
      try {
        const result = await table.updateRow(id, data);
        console.log("update text result", result);
        playSoundFile(null, 4);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }, 3000),
    []
  );

  const { settings } = state;
  const { language } = settings;
  const [newItem, setNewItem] = useState("");
  const [newRate, setNewRate] = useState(0);
  // const [editIndex, setEditIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // useEffect(() => {
  //   if (typeof editIndex === 'number') setTimeout(() => setEditIndex(null) , 3000)
  // },[editIndex])

  const initiateDeleteItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const deleteItem = async () => {
    if (!selectedItem) return;

    console.log(`${showingList} deleteItem itemId ${selectedItem}`);

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
    //Toast.show(defaultToastObj);
  };

  // const startEditing = (index) => {
  //   setEditIndex(index);
  // };

  const editExistingText = (text, index) => {
    const newItems = [...items];
    newItems[index].description = text;
    dispatch({ type: "UPDATE_ITEMS", items: newItems, key: itemKey });
    // setEditIndex(null); // Close the editor
  };

  const extractNumbers = (str) => {
    return str.match(/\d+/g)?.join("") || "";
  };

  const editRate = async (type, text, index) => {
    const newItems = [...items];
    console.log("edit rate", index, amountOrRate);
    console.log("edit rate2", index, newItems[index]);
    const currentValue = newItems[index][amountOrRate];
    const newValue = extractNumbers(text);
    newItems[index][amountOrRate] = newValue;
    dispatch({ type: "UPDATE_ITEMS", items: newItems, key: itemKey });
    // if (currentValue === newValue) return
    // try {
    //   const result = await debouncedUpdate(newItems[index].id, {
    //     [amountOrRate]: newItems[index][amountOrRate],
    //   });
    //   console.log("update editRate result ", result);
    //   setEditIndex(index)
    //   playSoundFile(null, 4);
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  };

  const addNewItem = async () => {
    if (newItem.trim() === "") return;
    const newColor = getRandomColor();
    const itemToAdd = {
      description: newItem,
      color: newColor,
      type: "expense",
      [amountOrRate]: +newRate || 0,
    };
    console.log("adding new item ", itemToAdd);
    const result = await table.createNewRow(itemToAdd);
    console.log("add result ", result);
    playSoundFile(null, 2);
    console.log("result", result);
    // setItems((items) => [...items, { id: result, ...itemToAdd }]);
    dispatch({
      type: "UPDATE_ITEMS",
      items: [...items, { id: result, ...itemToAdd }],
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
          {title}{" "}
          {isCollapsed ? (
            <Ionicons name="caret-down" />
          ) : (
            <Ionicons name="caret-up" />
          )}
        </Text>
      </TouchableOpacity>

      {!isCollapsed && (
        <View style={{ maxHeight: screenHeight * 0.6 }}>
          <ScrollView style={styles.listContent}>
            {items.map((item, index) => {
              return (
                <View key={index} style={styles.listItemContainer}>
                  <TextInput
                    style={styles.itemInput}
                    value={item.description}
                    onChangeText={(text) => {
                      editExistingText(text, index);
                      debouncedUpdate(item.id, { description: text });
                    }}
                  />
                  <TextInput
                    style={styles.itemInput}
                    keyboardType="numeric"
                    value={String(item[amountOrRate] || "")}
                    // onChangeText={(text) => editRate(item.type, text, index)}
                    onChangeText={(text) => {
                      editRate(item.type, text, index);
                      debouncedUpdate(item.id, { [amountOrRate]: text });
                    }}
                  />
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
                      <Ionicons name={"trash-outline"} size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>

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
            confirmText={translation[language]["confirm"]}
            cancelText={translation[language]["cancel"]}
            message={modalText}
          />
          {/* <Toast
            style={{
              elevation: 20, //Render the Toast component in your app's entry file, as the LAST CHILD in the View hierarchy
            }}
          /> */}
        </View>
      )}
    </View>
  );
};

export default GenericList;
