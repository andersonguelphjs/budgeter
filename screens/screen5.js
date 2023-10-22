import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Rotation from "../components/animated/Rotation";

const Screen5 = ({navigation}) => {


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Rotation speed={2} direction="counterclockwise" duration={2000}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Rotating Text</Text>
        </Rotation>
        <Button title="Screen6" onPress={() => navigation.navigate('Screen6')} />
      </View>
    );

};

export default Screen5;
