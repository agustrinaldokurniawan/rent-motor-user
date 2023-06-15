import React, { useContext, useEffect, useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import InterText from '../../../components/typography/inter-text';
import InputText from '../../../components/input/input-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainButton from '../../../components/button/main-button';
import useAuthApi from '../api/useAuthApi';
import { addMessage } from "@ouroboros/react-native-snackbar";
import { styles } from './style';
import { AuthContext } from '../../../context/authContext';

export default function LoginScreen({ navigation }) {
  const [authContext] = useContext(AuthContext)
  const { signIn } = authContext

  const { mutationSignin } = useAuthApi()

  const [showPassword, setShowPassword] = useState(false)
  const [formState, setFormState] = useState({
    email: null,
    password: null
  })

  useEffect(() => {
    onPostSignin()
  }, [mutationSignin.isSuccess])

  const onPostSignin = async () => {
    Keyboard.dismiss()
    if (!mutationSignin.isSuccess) {
      // console.log(mutationSignin.error)
    } else {
      if (mutationSignin.data.message) {
        addMessage({
          text: mutationSignin.data.message,
          duration: 2000
        })
      } else {
        signIn(mutationSignin.data)
        addMessage({
          text: 'Login Success',
          duration: 2000
        })
        navigation.navigate('Home')
      }
    }
  }
  const onPressSignin = () => {
    mutationSignin.mutate(formState)
  }

  const onChangeForm = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }

  const navigateLogin = () => {
    navigation.navigate('Signup')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.imageTop} source={require('../../../assets/illustrations/Welcome.png')} alt='Secure Login' />
      </View>

      <View style={styles.formContainer}>
        <KeyboardAvoidingView
          behavior='height'
          keyboardVerticalOffset={100}
          style={{ gap: 10 }}
        >
          <InterText variant={'bold'} style={styles.title}>Login</InterText>
          <InputText onChangeText={(value) => onChangeForm('email', value)} placeholder='Username' />
          <View style={styles.inputPasswordContainer}>
            <InputText onChangeText={(value) => onChangeForm('password', value)} style={styles.inputPassword} placeholder='Password' secureTextEntry={!showPassword} />
            <TouchableOpacity style={styles.eyeContainer} onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome5 name={!showPassword ? 'eye-slash' : 'eye'} size={24} />
            </TouchableOpacity>
          </View>
          <MainButton onPress={onPressSignin}>
            <InterText variant={'bold'} style={styles.textSignup}>Login</InterText>
          </MainButton>

          <TouchableOpacity style={styles.loginView} onPress={navigateLogin}>
            <FontAwesome name='long-arrow-left' size={24} />
            <InterText>Daftar sekarang</InterText>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}