import React from 'react';
import { Modal, View, Text, StyleSheet, Button, Alert } from 'react-native';

const ConfirmationModal = ({
  modalVisible,
  onConfirm,
  onCancel,
  confirmText = "confirm",
  cancelText = "cancel",
  message,
  transparent = true,
  animationType = "slide",
  modalStyle,
  messageStyle,
  buttonsContainerStyle,
}) => {
  return (
    <Modal
      transparent={transparent}
      animationType={animationType}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        onCancel();
      }}
    >
      <View style={[styles.centeredView, modalStyle]}>
        <View style={[styles.modalView, modalStyle]}>
          <Text style={[styles.modalText, messageStyle]}>{message}</Text>
          <View style={[styles.buttonsContainer, buttonsContainerStyle]}>
            <Button onPress={onConfirm} title={confirmText} />
            <Button onPress={onCancel} title={cancelText} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalView: {
    margin: 20,
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center", // This centers the text and buttons
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15, // Default margin between the text and the buttons
    textAlign: "center", // This centers the text horizontally
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // This spreads out the buttons
    width: '100%', // Ensures the buttons container takes the full width of the modal
  },
});

export default ConfirmationModal;
