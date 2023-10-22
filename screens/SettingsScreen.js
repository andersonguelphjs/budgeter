import React, {useContext} from "react";
import { View ,Text } from "react-native";
import Button from "../components/ui/Button";
import ItemList from "../components/ItemList/ItemList";
import { AppContext } from "../store/app-context";

const SettingsScreen = ({ navigation }) => {
  const ctx =  useContext(AppContext)
  const {currentLanguage, language} = ctx?.state
  const text = language[currentLanguage]
  const {dispatch} = ctx

  // console.log("ctx", ctx?.value)
  const yourHandler= (event=> {
    console.log("yourHandler");
  })
  return (
    <View>
    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: 'space-between', }}>
    {/* <Button onPress={yourHandler} shape="pill">{text.cancel}</Button> */}
    <Button onPress={() => dispatch({type: "TOGGLE_LANGUAGE"})} shape="pill">{currentLanguage}</Button>
    {/* <Button onPress={yourHandler} shape="pill">{text.save}</Button> */}
    </View>
 
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
    <ItemList />
    </View>
    </View>
  );
};

export default SettingsScreen;
