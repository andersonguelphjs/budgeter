import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { GameContext } from '../store/context';

const ContextExample = () => {
  const { state, dispatch } = useContext(GameContext);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default ContextExample;
