import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import OverlayedImage from '../components/OverlayedImage/OverlayedImage';
const ScreenWithOverlay = () => {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Main Screen</Text>
        </View>
        <View style={styles.content}>
          <OverlayedImage 
            backgroundImageSource={require("../assets/AtHome.png")}

          />

        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      padding: 16,
      backgroundColor: '#4c669f',
    },
    headerText: {
      fontSize: 20,
      color: '#fff',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    description: {
      marginTop: 20,
      fontSize: 16,
      textAlign: 'center',
    },
  });
  
  export default ScreenWithOverlay;
  