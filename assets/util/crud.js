const Game = require('./models');

// Create a new game
const createGame = async (name, score) => {
  try {
    const game = await Game.create({
      name,
      score,
    });
    return game;
  } catch (error) {
    console.error('Error creating game:', error);
    throw error;
  }
};

// Get all games
const getAllGames = async () => {
  try {
    const games = await Game.findAll();
    return games;
  } catch (error) {
    console.error('Error getting games:', error);
    throw error;
  }
};

// Update a game
const updateGame = async (id, score) => {
  try {
    const game = await Game.findByPk(id);
    if (!game) {
      throw new Error('Game not found');
    }
    game.score = score;
    await game.save();
    return game;
  } catch (error) {
    console.error('Error updating game:', error);
    throw error;
  }
};

// Delete a game
const deleteGame = async (id) => {
  try {
    const game = await Game.findByPk(id);
    if (!game) {
      throw new Error('Game not found');
    }
    await game.destroy();
  } catch (error) {
    console.error('Error deleting game:', error);
    throw error;
  }
};

module.exports = {
  createGame,
  getAllGames,
  updateGame,
  deleteGame,
};
