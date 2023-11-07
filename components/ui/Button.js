import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';

// Define the shapes as constants. This approach keeps it scalable, as you can easily add more shapes and their styles.
const BUTTON_SHAPES = {
  pill: { borderRadius: 25 }, // or a very high value to ensure sides are fully rounded
  roundedSquare: { borderRadius: 10 }, // or the value of your choice for rounded corners
  square: { borderRadius: 0 },
  // ... add more shapes here as needed
};

function Button({
  children,
  onPress,
  shape = 'roundedSquare', // default shape
  paddingVertical = 6,
  paddingHorizontal = 6,
  marginVertical = 0,
  marginHorizontal = 4,
  backgroundColor = colors.shufu_blue, // default color; you might want to use your color constant here
  shadow = true,
  textColor = 'white',
  fontSize = 16,
  fontWeight = 'bold',
  buttonStyle = {},
  textStyle = {},
  
}) {
  console.log(textStyle)
  // Choose the shape style from the BUTTON_SHAPES, defaulting to the style for 'roundedSquare' if the shape prop is not recognized.
  const shapeStyle = BUTTON_SHAPES[shape] || BUTTON_SHAPES.roundedSquare;

  const shadowStyles = shadow ? {
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  } : {};

  const styles = StyleSheet.create({
    button: {
      paddingVertical,
      paddingHorizontal,
      marginVertical,
      marginHorizontal,
      backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      maxWidth: '50%',
      minWidth: '20%',
      alignSelf: 'center',
      ...shapeStyle, // apply the styles for the chosen shape
      ...shadowStyles,
      ...buttonStyle, // allow additional styles to be passed in
    },
    pressed: {
      opacity: 0.7,
    },
    buttonText: {
      textAlign: 'center',
      color: textColor,
      fontSize,
      fontWeight,
      ...textStyle, // allow additional styles to be passed in
    },
  });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;
