import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import InterText from "../../components/typography/inter-text";
import MainButton from "../../components/button/main-button";
import { AuthContext } from "../../context/authContext";
import CallToActionLogin from "../../components/call-to-action";

export default function ProfileScreen(props) {
  const [_, state] = useContext(AuthContext);

  const onLogout = async () => {};

  if (!state?.user) {
    return <CallToActionLogin {...props} />;
  }

  return (
    <View>
      <InterText>Profile</InterText>
      <MainButton onPress={onLogout}>
        <InterText>Logout</InterText>
      </MainButton>
    </View>
  );
}

const style = StyleSheet.create({});
