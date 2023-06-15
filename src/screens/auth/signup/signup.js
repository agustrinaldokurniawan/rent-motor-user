import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addMessage } from "@ouroboros/react-native-snackbar";
import { styles } from "./style";
import useAuthApi from "../../../api/useAuthApi";
import InterText from "../../../components/typography/inter-text";
import InputText from "../../../components/input/input-text";
import MainButton from "../../../components/button/main-button";

export default function SignupScreen({ navigation }) {
  const { mutationSignup } = useAuthApi();

  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    Keyboard.dismiss();
    if (!mutationSignup.isSuccess) {
      console.log(mutationSignup.error);
    } else {
      if (mutationSignup.data.message) {
        addMessage({
          text: mutationSignup.data.message,
          duration: 2000,
        });
      } else {
        console.log(mutationSignup.data);
      }
    }
  }, [mutationSignup.isSuccess]);

  const onPressSignup = () => {
    mutationSignup.mutate(formState);
  };

  const onChangeForm = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  const navigateLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.imageTop}
          source={require("../../../assets/illustrations/secure-login.png")}
          alt="Secure Login"
        />
      </View>

      <View style={styles.formContainer}>
        <KeyboardAvoidingView
          behavior="height"
          keyboardVerticalOffset={100}
          style={{ gap: 10 }}
        >
          <InterText variant={"bold"} style={styles.title}>
            Daftar
          </InterText>
          <InputText
            onChangeText={(value) => onChangeForm("email", value)}
            placeholder="Username"
          />
          <View style={styles.inputPasswordContainer}>
            <InputText
              onChangeText={(value) => onChangeForm("password", value)}
              style={styles.inputPassword}
              placeholder="Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={() => setShowPassword(!showPassword)}
            >
              <FontAwesome5
                name={!showPassword ? "eye-slash" : "eye"}
                size={24}
              />
            </TouchableOpacity>
          </View>
          <MainButton onPress={onPressSignup}>
            <InterText variant={"bold"} style={styles.textSignup}>
              Signup
            </InterText>
          </MainButton>

          <TouchableOpacity style={styles.loginView} onPress={navigateLogin}>
            <FontAwesome name="long-arrow-left" size={24} />
            <InterText>Login sekarang</InterText>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
