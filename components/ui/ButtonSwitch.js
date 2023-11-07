import React from 'react';
import { ButtonGroup } from '@rneui/themed';

const ButtonSwitch = ({ buttons, multiple, selectedIndices, setSelectedIndices, currentTheme = {} }) => {
  const handlePress = (index) => {
    const button = buttons[index];

    if (multiple) {
      // Toggle selection for multiple mode
      setSelectedIndices((currentIndices) => {
        const newIndices = currentIndices.includes(index)
          ? currentIndices.filter((i) => i !== index) // Remove index
          : [...currentIndices, index]; // Add index
        return newIndices;
      });
    } else {
      // Set selected index for single mode
      setSelectedIndices(index);
    }

    // Call the associated onPress function if it exists
    button.onPress && button.onPress();
  };
/*
props eg
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Multiple-choice mode state
  const [selectedIndices, setSelectedIndices] = useState([]);

  const buttons = [
    { title: 'Button 1', onPress: () => console.log('Button 1 pressed') },
    { title: 'Button 2', onPress: () => console.log('Button 2 pressed') },
    { title: 'Button 3', onPress: () => console.log('Button 3 pressed') },
    // ... other buttons
  ];
*/
  return (
    <ButtonGroup
      buttons={buttons.map((button) => button.title)}
      onPress={handlePress}
      selectMultiple={multiple}
      selectedIndexes={multiple ? selectedIndices : [selectedIndices].filter((i) => i !== null)}
      containerStyle={{ marginBottom: 20 }}
      selectedButtonStyle={{ backgroundColor: currentTheme?.button || 'blue', borderWidth: 1, borderColor: 'black' }}
      buttonStyle={{borderWidth: 1, borderColor: 'black'}}
      innerBorderStyle={{ width: 0 }}
      textStyle={{ color: 'black'}}
      selectedTextStyle={{ color: 'black'}}
    />
  );
};

export default ButtonSwitch;
