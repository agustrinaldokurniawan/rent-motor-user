import React, { useContext, useEffect } from 'react'
import { View } from "react-native";
import InterText from "../../components/typography/inter-text";
import MainButton from '../../components/button/main-button';
import { AuthContext } from '../../context/authContext'

export default function HomeScreen({ navigation }) {
  const [_, state] = useContext(AuthContext)

  const goLogin = async () => {
    navigation.navigate('Login')
  }

  return (
    <View>
      {
        state.user ? (
          <InterText>Welcome Back!</InterText>
        ) : ''
      }
      <InterText>Home</InterText>
      <MainButton onPress={goLogin}>
        <InterText>Login</InterText>
      </MainButton>
    </View>
  )
}