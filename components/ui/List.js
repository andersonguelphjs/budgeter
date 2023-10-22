import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ id, name }) => {
  console.log(id, name);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>id{id}</Text>
      <Text style={styles.description}>name{name}</Text>
    </View>
  );
};

const List = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.listContainer}>
      {data.map((item, index) => (
        <ListItem key={index} id={item.id} name={item.name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    color: 'black',
    marginBottom: 16,
    elevation: 2, // for Android shadow
    shadowColor: '#000000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555555',
  },
});

export default List;
