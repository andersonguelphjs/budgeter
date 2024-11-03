import { StyleSheet } from "react-native";
export const getSettingScreenStyles = (currentTheme) =>
  StyleSheet.create({
    scrollViewContent: {
      flex: 1,
      padding: 16,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
    headerTitle: {
      color: currentTheme.text,
      fontSize: 22,
    },
    optionTitle: {
      color: currentTheme.text,
      fontSize: 16,
      paddingLeft: 10,
    },
    settingRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    settingsRow: {
      marginTop: 15,
    },
    collapseButton: {
      //generic list
    },
    collapseButtonText: {
      color: currentTheme.text,
      fontSize: 22,
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
      borderWidth: 1, // This sets the border width
      borderColor: "black",
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
      minWidth: "30%",
    },
    inputContainer: {
      flexDirection: "row",
      margin: 10,
      padding: 10,
      backgroundColor: "#fff",
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: "gray",
      // Reduce padding to lower space inside the input
      paddingVertical: 0, // Smaller value = less space on top and bottom
      paddingHorizontal: 10,
    }, //interval
    addButton: {
      padding: 10,
      backgroundColor: "#007bff",
      borderRadius: 10,
    },
    addButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    addRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      // alignItems: 'center', // Vertically align items in the center
      // justifyContent: 'space-evenly', // Evenly distribute space among items
      padding: 10, // Add some padding around the row
      // Add more styles as needed
    },
    RNPickerSelectcontainer: {
      width: 100,
    },
    RNPickerSeperatorContainer: {
      width: "5%",
    },
    pickerSelect: {
      // Add more styles as needed for picker
    },
    separatorText: {
      marginHorizontal: 5, // Space around the separator text
      fontSize: 18, // Adjust the font size as needed
      color: "black", // Set the color as needed

      // Add more styles as needed for text
    },
    timeText: {
      fontSize: 16,
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    itemText: {
      color: currentTheme.text,
    },
    timeButton: {
      padding: 5,
    },
    iconButton: {
      marginLeft: 10,
    },
  });

export const getCalendarScreenStyles = (currentTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
    textCentered: {
      textAlign: "center",
      backgroundColor: currentTheme.button,
      padding: 10,
      borderWidth: 1,
      borderColor: "black",
    },
    hidden: {
      display: "none",
    },
    horizontalLayout: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginVertical: 10,
    },
    label: {
      marginHorizontal: 8,
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 5,
      padding: 10,
    },
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    startEndTimeContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    eventListContainer: {
      padding: 10,
    },
    eventItemContainer: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 5,
      marginTop: 10,
    },
    eventItem: {
      flexDirection: "row",
      padding: 5,
      borderRadius: 5,
      justifyContent: "space-between",
      alignItems: "center",
    },
    addEventContainer: {
      backgroundColor: "white",
      margin: 10,
      padding: 15,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      borderWidth: 1,
      borderColor: "black",
    },
    addedEventMsg: {
      color: "red",
      textAlign: "center",
    },
    addButton: {
      backgroundColor: "#4CAF50",
      padding: 10,
      opacity: 1,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 5,
      alignItems: "center",
      margin: 10,
    },
    addButtonText: {
      color: "#fff",
      textAlign: "center",
      fontSize: 16,
    },
    disabledButton: {
      backgroundColor: "grey",
      padding: 10,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 5,
      alignItems: "center",
      margin: 10,
    },
    disabledButtonText: {
      textAlign: "center",
      color: "darkgrey",
      fontSize: 16,
    },
    multilineInput: {
      height: 100,
    },
    chooseADayText: {
      fontSize: 20,
      fontWeight: "bold",
      color: currentTheme.text || "black",
      backgroundColor: currentTheme.background || "white",
      textAlign: "center",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
      marginBottom: 5,
    },
    addEventText: {
      fontSize: 20,
      fontWeight: "bold",
      color: currentTheme.text || "black",
      backgroundColor: currentTheme.background || "white",
      textAlign: "center",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
      marginBottom: 5,
    },
    eventListContainer: {
      padding: 10,
    },
    eventItem: {
      flexDirection: "row",
      padding: 5,
      borderRadius: 5,
      justifyContent: "space-between",
      alignItems: "center",
      // additional styling...
    },
    iconButton: {
      // ... your styles for the delete button
    },
  });

export const getAdminScreenStyles = (currentTheme) =>
  StyleSheet.create({
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
    pickerPaddingBottom: { paddingBottom: 10 },
    flexCenter: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    flex1Center: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export const getMonthlySummaryScreenStyles = (currentTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
    chartContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 20,
    },
    monthContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    monthText: {
      fontSize: 20,
    },
  });

export const getSummaryScreenStyles = (currentTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
    monthContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    monthText: {
      fontSize: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    table: {
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: "black",
    },
    tableRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#ddd",
      padding: 10,
      backgroundColor: currentTheme.background,
    },
    tableHeaderRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "black",
      padding: 10,
      backgroundColor: currentTheme.accent,
    },
    tableHeader: {
      fontWeight: "bold",
      flex: 1, // this will divide the row space equally between the columns
      textAlign: "center",
    },
    tableCell: {
      flex: 1, // this will divide the row space equally between the columns
      textAlign: "center",
    },
    positiveTotal: {
      color: "green",
    },
    negativeTotal: {
      color: "red",
    },
  });
