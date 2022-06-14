import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import MovieSearchScreen from "../screens/FilmSearch";
import ProfileScreen from "../screens/Profile";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MovieOfTheDayListScreen from "../screens/MovieOfTheDayList";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
      }}
    >
      <Tab.Screen
        name={"MOTD"}
        component={MovieOfTheDayListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Search Movie"}
        component={MovieSearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="question" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;