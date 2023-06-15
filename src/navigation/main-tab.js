import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import MainTabItem from "./main-tab-item";
import InterText from "../components/typography/inter-text";
import ProfileScreen from "../screens/profile";
import HomeScreen from "../screens/home";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import HomeHeader from "../components/header/home";
import ListOrder from "../screens/orders/list";
import ListOrderHeader from "../components/header/order/list";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const [authState, state] = useContext(AuthContext);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FFF",
          height: 75,
        },
        tabBarActiveTintColor: "#E57C23",
        tabBarInactiveTintColor: "#858d8f",
        tabBarLabelPosition: "beside-icon",
        tabBarIconStyle: {
          width: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          header: (props) => <HomeHeader {...props} />,
          tabBarLabel: ({ focused }) => (
            <InterText variant={"bold"} style={{ color: focused && "#E57C23" }}>
              {focused ? "Home" : ""}
            </InterText>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MainTabItem focused={focused}>
              <MaterialIcons name="home-filled" color={color} size={size} />
            </MainTabItem>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={ListOrder}
        options={{
          title: "Order",
          header: (props) => <ListOrderHeader {...props} />,
          tabBarLabel: ({ focused }) => (
            <InterText variant={"bold"} style={{ color: focused && "#E57C23" }}>
              {focused ? "Order" : ""}
            </InterText>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MainTabItem focused={focused}>
              <FontAwesome5 name="shopping-bag" color={color} size={size} />
            </MainTabItem>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "User",
          tabBarLabel: ({ focused }) => (
            <InterText variant={"bold"} style={{ color: focused && "#E57C23" }}>
              {focused ? "User" : ""}
            </InterText>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MainTabItem focused={focused}>
              <EvilIcons name="user" color={color} size={size * 1.5} />
            </MainTabItem>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
