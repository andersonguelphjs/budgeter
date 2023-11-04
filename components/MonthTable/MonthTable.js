import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const MonthTable = ({ properties, headerText, data, styleConfig = {} }) => {
  // Default colors configuration
  const colors = {
    headerBackground: styleConfig.headerBackground || '#333',
    headerColor: styleConfig.headerColor || '#FFF',
    rowBackground: styleConfig.rowBackground || '#FFF',
    rowColor: styleConfig.rowColor || '#000',
    borderColor: styleConfig.borderColor || '#CCC',
    ...styleConfig // in case there are other style configurations
  };

  // Create header views
  const headerViews = headerText.map((header, index) => (
    <View style={[styles.headerItem, { backgroundColor: colors.headerBackground }]} key={index}>
      <Text style={[styles.headerText, { color: colors.headerColor }]}>{header}</Text>
    </View>
  ));

  // Create row views
  const rowViews = data.map((row, rowIndex) => {
    const cells = properties.map((val_key, index) => (
      <View style={[styles.cell, { backgroundColor: colors.rowBackground }]} key={index}>
        <Text style={[styles.cellText, { color: colors.rowColor }]}>{String(row[val_key])}</Text>
      </View>
    ));

    return (
      <View style={[styles.row, { borderBottomColor: colors.borderColor }]} key={rowIndex}>
        {cells}
      </View>
    );
  });

  return (
    <ScrollView horizontal={true}>
      <View>
        <View style={styles.header}>{headerViews}</View>
        {rowViews}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerItem: {
    padding: 8,
    // Adjust the width of the properties depending on the number of columns and the desired layout
    width: 100, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  cell: {
    padding: 8,
    // Adjust the width of the cells depending on the number of columns and the desired layout
    width: 100, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 14,
  },
});

export default MonthTable;
