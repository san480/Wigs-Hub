import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./screens/Login"
import Home from "./screens/Home"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}