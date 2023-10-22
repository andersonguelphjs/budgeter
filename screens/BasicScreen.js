import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SvgUri } from 'react-native-svg';
const BasicScreen = ({ navigation, route }) => {
  // You can access route parameters using route.params
  const { param1, param2 } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Screen</Text>
      <Text style={styles.text}>Parameter 1: {param1}</Text>
      <Text style={styles.text}>Parameter 2: {param2}</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to Another Screen"
        onPress={() => navigation.navigate('AnotherScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default BasicScreen;
