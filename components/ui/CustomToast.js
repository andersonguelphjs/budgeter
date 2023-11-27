import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomToast = ({ message, color = 'white', background = 'black', padding = 10, hideTime = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, hideTime);

    return () => clearTimeout(timeout);
  }, [hideTime]);

  if (!isVisible) return null;

  return (
    <View style={[styles.toast, { backgroundColor: background, padding }]}>
      <Text style={{ color }}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomToast;
