import React, { useEffect } from 'react'
import { View } from "react-native";
import InterText from "../../components/typography/inter-text";
import MainButton from '../../components/button/main-button';
import UseSecureStore from '../../utils/secure-store';

export default function ProfileScreen(props) {
  const { removeValue, getValue } = UseSecureStore()


  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const user = await getValue('user')
    console.log({ user })
    if (!user) {
      navigation.navigate('Home')
    }
  }

  const onLogout = async () => {
    await removeValue('user')
  }
  return (
    <View>
      <InterText>Profile</InterText>
      <MainButton onPress={onLogout}>
        <InterText>Logout</InterText>
      </MainButton>
    </View>
  )
}