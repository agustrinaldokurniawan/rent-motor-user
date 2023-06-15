import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "../screens/auth/signup/signup";
import LoginScreen from "../screens/auth/login/login";
import { useContext } from "react";
import ProfileScreen from "../screens/profile";
import HomeScreen from "../screens/home";
import { AuthContext } from "../context/authContext";
import MainTabs from "./main-tab";
import DetailMotor from "../screens/home/detail";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTab"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailMotor" component={DetailMotor} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
