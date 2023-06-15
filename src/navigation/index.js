import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "../screens/auth/signup/signup";
import LoginScreen from "../screens/auth/login/login";
import { useContext, useEffect, useState } from "react";
import UseSecureStore from "../utils/secure-store";
import ProfileScreen from "../screens/profile";
import HomeScreen from "../screens/home";
import { AuthContext } from "../context/authContext";

const Stack = createNativeStackNavigator()

export default function Navigation() {
  const { user } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        {
          user ? (
            <>
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  headerShown: false
                }}
              />
            </>
          ) : (
            <>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}