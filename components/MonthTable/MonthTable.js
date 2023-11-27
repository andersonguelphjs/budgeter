import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useCustomStyles } from '../../hooks/use-custom-style';

const MonthTable = ({ properties, headerText, data, styleConfig = {} }) => {
  const customStyles = useCustomStyles();

  // Create header views
  const headerViews = headerText.map((header, index) => (
    <View style={[customStyles.bTable.headerItem, { backgroundColor: customStyles.bTable.tableColors.headerBackground }]} key={index}>
      <Text style={[customStyles.bTable.headerText, { color: customStyles.bTable.tableColors.headerColor }]}>{header}</Text>
    </View>
  ));

  // Create row views
  const rowViews = data.map((row, rowIndex) => {
    const cells = properties.map((val_key, index) => (
      <View style={[customStyles.bTable.cell, { backgroundColor: customStyles.bTable.tableColors.rowBackground }]} key={index}>
        <Text style={[customStyles.bTable.cellText, { color: customStyles.bTable.tableColors.rowColor }]}>{String(row[val_key])}</Text>
      </View>
    ));

    return (
      <View style={[customStyles.bTable.row, { borderBottomColor: customStyles.bTable.tableColors.borderColor }]} key={rowIndex}>
        {cells}
      </View>
    );
  });

  return (
    <ScrollView horizontal={true}>
      <View style={customStyles.bTable.tableContainer}>
        <View style={customStyles.bTable.header}>{headerViews}</View>
        {rowViews}
      </View>
    </ScrollView>
  );
};


export default MonthTable;
