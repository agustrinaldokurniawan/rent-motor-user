import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import InterText from "../../components/typography/inter-text";
import MainButton from "../../components/button/main-button";
import { AuthContext } from "../../context/authContext";
import useMotorsApi from "../../api/useMotorsApi";
import ListMotorComponent from "../../components/motors/list";

export default function HomeScreen({ navigation }) {
  const [_, state] = useContext(AuthContext);
  const { listMotor } = useMotorsApi();

  const goLogin = async () => {
    navigation.navigate("Login");
  };

  return (
    <View style={style.container}>
      <ListMotorComponent motors={listMotor?.data} navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
});
