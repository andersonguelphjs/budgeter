import React, {useReducer} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
import useSoundPlayer from "../hooks/use-sound";
import useSQLLiteDatabase from "../hooks/use-sqllite-database";
import { FinanceSchema } from "../models/Finance";
import { CategorySchema } from '../models/Category';
import language from "../assets/language/text.json"
export const AppContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  playSoundFile: (index) => {},
  language: language,
  currentLanguage: "en"
});

const initialState = {
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  playSoundFile: (index) => {},
  language: language,
  currentLanguage: "en"
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LANGUAGE":
      return { ...state, currentLanguage: state.currentLanguage === "en" ? "ja" : "en" };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "UPDATE_GAME":
      console.log("UPDATE_GAME", action.game);
      return { ...state, game: action.game };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [authToken, setAuthToken] = useState();
  const { playSound } = useSoundPlayer();
  const {
    getFirstRow: getFirstRow,
    getRowById : getRowById,
    createNewRow: createNewRow,
    updateRow: updateRow,
    deleteRow: deleteRow,
    getAllRows: getAllRows,
    deleteAllRows: deleteAllRows,
  } = useSQLLiteDatabase({ table: "game", desiredSchema: FinanceSchema });

  const {
    getFirstRow: getFirstCategoryRow,
    getRowById : getCategoryRowById,
    createNewRow: createNewCategoryRow,
    updateRow: updateCategoryRow,
    deleteRow: deleteCategoryRow,
    getAllRows: getAllCategoryRows,
    deleteAllRows: deleteAllCategoryRows,
  } = useSQLLiteDatabase({ table: "category", desiredSchema: CategorySchema });
  const authenticate = (token) => {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  };

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  };

  const playSoundFile = (e, index = null) => {
    playSound(index);
  };


  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    playSoundFile: playSoundFile,
    getFirstRow: getFirstRow,
    getRowById: getRowById,
    createNewRow: createNewRow,
    updateRow: updateRow,
    deleteRow: deleteRow,
    getAllRows: getAllRows,
    deleteAllRows: deleteAllRows,
    getFirstCategoryRow: getFirstCategoryRow,
    createNewCategoryRow: createNewCategoryRow,
    getCategoryRowById : getCategoryRowById,
    updateCategoryRow: updateCategoryRow,
    deleteCategoryRow: deleteCategoryRow,
    getAllCategoryRows: getAllCategoryRows,
    deleteAllCategoryRows: deleteAllCategoryRows,
    state: state,
    dispatch : dispatch
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
