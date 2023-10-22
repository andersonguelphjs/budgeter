import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { AppContext } from "../store/app-context";
import Button from "../components/ui/Button";

const DatabaseScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const ctx = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Fetch all games on component mount
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const gameData = await ctx.getAllGames();
    setGames(gameData);
  };

  const handleGameSelection = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const handleDeleteGame = async () => {
    if (selectedGame) {
      const res = await ctx.deleteGame(selectedGame.id);
      setSelectedGame(null);
      setShowModal(false);
      fetchGames();
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleGameSelection(item)}
      style={styles.itemContainer}
    >
      <Text style={styles.itemText}>{`${item.name} ${item.id}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedGame && (
        <View style={styles.detailsContainer}>
          <Text>Game Name: {selectedGame.name}</Text>
          <Text>Game Score: {selectedGame.score}</Text>
          {/* Display other game details here */}
        </View>
      )}
      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Are you sure you want to delete this game?</Text>
            <Button title="Delete" onPress={handleDeleteGame}>Delete</Button>
            <Button title="Cancel" onPress={() => setShowModal(false)}>Cancel</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    backgroundColor: "#eaeaea",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
  },
});
export default DatabaseScreen;
