import React, { useState } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import { storeGame, fetchGames, updateGame, deleteGame } from '../util/http';

const HttpScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);

  const handleStoreGame = async () => {
    const newGame = { name: 'New Game', score: 0 };
    const gameId = await storeGame(newGame);
    console.log('New game created with ID:', gameId);
  };

  const handleFetchGames = async () => {
    const fetchedGames = await fetchGames();
    setGames(fetchedGames);
  };

  const handleUpdateGame = async (id) => {
    const updatedGame = { name: 'Updated Game', score: 100 };
    await updateGame(id, updatedGame);
    console.log('Game updated successfully');
  };

  const handleDeleteGame = async (id) => {
    await deleteGame(id);
    console.log('Game deleted');
  };

  const handleGoToStartScreen = () => {
    navigation.navigate('StartScreen');
  };

  return (
    <View>
      <Button title="Store Game" onPress={handleStoreGame} />
      <Button title="Fetch Games" onPress={handleFetchGames} />

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Score: {item.score}</Text>
            <Button title="Update" onPress={() => handleUpdateGame(item.id)} />
            <Button title="Delete" onPress={() => handleDeleteGame(item.id)} />
          </View>
        )}
      />

      <Button title="Go to Screen 1" onPress={handleGoToStartScreen} />
    </View>
  );
};

export default  HttpScreen;
