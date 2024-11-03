import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useCustomStyles } from "../../hooks/use-custom-style";

const MonthTable = ({
  properties,
  columnHeaderText,
  aggregatedArray,
  styleConfig = {},
  totalSum = 0,
}) => {
  const customStyles = useCustomStyles();

  // Create header views
  const headerRow = columnHeaderText.map((header, index) => (
    <View
      style={[
        customStyles.bTable.headerItem,
        { backgroundColor: customStyles.bTable.tableColors.headerBackground },
      ]}
      key={index}
    >
      <Text
        style={[
          customStyles.bTable.headerText,
          { color: customStyles.bTable.tableColors.headerColor },
        ]}
      >
        {header}
      </Text>
    </View>
  ));

  const removeYear = (str) => {
    return str.substr(5, str.length);
  };
  // Create row views
  const rows = aggregatedArray.map((row, rowIndex) => {
    const cells = properties.map((val_key, index) => (
      <View
        style={[
          customStyles.bTable.cell,
          { backgroundColor: customStyles.bTable.tableColors.rowBackground },
        ]}
        key={index}
      >
        <Text
          style={[
            customStyles.bTable.cellText,
            { color: customStyles.bTable.tableColors.rowColor },
          ]}
        >
          {val_key === "dateString"
            ? removeYear(String(row[val_key]))
            : String(row[val_key])}
        </Text>
      </View>
    ));

    return (
      <View
        style={[
          customStyles.bTable.row,
          { borderBottomColor: customStyles.bTable.tableColors.borderColor },
        ]}
        key={rowIndex}
      >
        {cells}
      </View>
    );
  });

  const totalCells = properties.map((val_key, index) => {
    return (
      <View
        style={[
          customStyles.bTable.cell,
          { backgroundColor: customStyles.bTable.tableColors.rowBackground },
        ]}
        key={index}
      >
        <Text
          style={[
            customStyles.bTable.cellText,
            { color: customStyles.bTable.tableColors.rowColor },
          ]}
        >
          {val_key === "total" ? totalSum.toFixed(2) : ""}
        </Text>
      </View>
    );
  });

  // Define totalRow after totalCells
  const totalRow = (
    <View
      style={[
        customStyles.bTable.row,
        { borderBottomColor: customStyles.bTable.tableColors.borderColor },
      ]}
      key="total_row"
    >
      {totalCells}
    </View>
  );
  return (
    <ScrollView horizontal={true}>
      <View style={customStyles.bTable.tableContainer}>
        <View style={customStyles.bTable.header}>{headerRow}</View>
        {/* {totalRow} */}
        {rows}
      </View>
    </ScrollView>
  );
};
export default MonthTable;
