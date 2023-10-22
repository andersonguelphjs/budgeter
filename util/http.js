import axios from 'axios';
//firebase > create project > realtime database > create database > security start in test mode
const BACKEND_URL = 'https://adventure-daze-default-rtdb.firebaseio.com/';

export async function storeGame(gameData) {
  const response = await axios.post(BACKEND_URL + '/games.json', gameData);
  const id = response.data.name;
  return id;
}

export async function fetchGames() {
  const response = await axios.get(BACKEND_URL + '/games.json');

  const games = [];

  for (const key in response.data) {
    const gameObj = {
      id: key,
      name: response.data[key].name,
      score: response.data[key].score
    };
    games.push(gameObj);
  }

  return games;
}

export function updateGame(id, gameData) {
  return axios.put(BACKEND_URL + `/games/${id}.json`, gameData);
}

export function deleteGame(id) {
  return axios.delete(BACKEND_URL + `/games/${id}.json`);
}
