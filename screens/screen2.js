import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/ui/Button";
import FlatButton from "../components/ui/FlatButton";
import Card from "../components/ui/Card";
import { colors } from "../constants/colors";
import List from "../components/ui/List";
import CustomModal from "../components/ui/CustomModal";
import Alert from "../components/ui/Alert";
import CustomDropdown from "../components/ui/Dropdown";
import ProgressIndicator from "../components/ui/ProgressIndicator";
import Toast from "react-native-toast-message";
import { AppContext } from "../store/app-context";

function Screen2({ navigation, route }) {
  const { title = "tile", headerColor = "#fff" } = route.params || {};
  const progressPercent = 70;
  const [modalVisible, setModalVisible] = useState(false);
  const ctx = useContext(AppContext);
  const { token } = ctx;
  console.log("token: " + token);

  async function getDataFromProtectedRoute() {
    try {
      const apiUrl =
        "https://ki9nmsqez4.execute-api.us-east-1.amazonaws.com/dev";
      console.log("apiUrl: " + apiUrl);
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("requestOptions: ", requestOptions);
      const response = await fetch(apiUrl + "/protected", requestOptions);
      const responseData = await response.json();
      console.log("responseData: ", responseData);
      return responseData;
    } catch (error) {
      throw error;
    }
  }

  async function getDataAsync() {
    try {
      const response = await getDataFromProtectedRoute();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const buttons = [
    { label: "Button 1", onPress: () => getDataAsync() },
    { label: "Button 2", onPress: () => showAlert() },
    { label: "Button 3", onPress: () => setModalVisible(false) },
  ];
  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "Hello!",
      text2: "This is another toast message",
    });
  };
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };
  // Customize header style
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerStyle: { backgroundColor: headerColor },
      headerTintColor: "#fff",
    });
  }, [navigation, title, headerColor]);
  const data = [
    { title: "Item 1", description: "Description 1" },
    { title: "Item 2", description: "Description 2" },
    { title: "Item 3", description: "Description 3" },
  ];

  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={showToast}>
        <Text>Show Toast</Text>
      </Button>

      <View>
        <Button title="Show Alert" onPress={showAlert}>
          <Text>Alert</Text>
        </Button>
        <Alert
          visible={alertVisible}
          message="This is an alert message!"
          onClose={closeAlert}
        />
        <Text>There's stuff hre</Text>
        <CustomModal
          visible={modalVisible}
          onClose={closeModal}
          title="Modal Title"
          buttons={buttons}
        />
        <Button title="Open" onPress={openModal}>
          <Text>Open Modal</Text>
        </Button>
        <View>
          <Text>Select an option:</Text>
          <CustomDropdown
            options={["Option 1", "Option 2", "Option 3"]}
            onSelect={handleOptionSelect}
          />
        </View>
        <Card>
          <FlatButton
            title="Go to Screen 3"
            onPress={() => navigation.navigate("Screen3")}
          >
            <Text>Go to Screen 3</Text>
          </FlatButton>
        </Card>
      </View>
      <Text style={styles.heading}>Welcome to the Woodland</Text>
      <Text style={styles.text}>
        Feel the nature's magic with our playful colors!
      </Text>
      <List data={data} />
      <View style={styles.progressContainer}>
        <ProgressIndicator
          percent={progressPercent}
          size="small"
          color="#FF0000"
          style={styles.progressIndicator}
        />
      </View>
      <Toast
        style={{
          elevation: 20, //Render the Toast component in your app's entry file, as the LAST CHILD in the View hierarchy
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    color: colors.heading,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  progressContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  progressIndicator: {
    margin: 20,
  },
});
// Repeat the same pattern for Screen2 and Screen3

export default Screen2;
