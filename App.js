import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inserir from './src/Inserir';
import Editar from './src/Editar';
import Home from './src/Home';
import Login from './src/Login';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from "react-native-safe-area-context";
import Cadastrar from './src/Cadastrar';

const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animation:"none",
          headerShown:false
        }}/>

      <Stack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{
          animation:"none",
          headerShown:false
        }}/>

        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          animation:'none',
          headerShown:false
        }}/>

        <Stack.Screen
        name="Inserir"
        component={Inserir}
        options={{
          animation:"none",
          headerShown:false
        }}/>

      <Stack.Screen
        name="Editar"
        component={Editar}
        options={{
          animation:"none",
          headerShown:false
        }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    
  )
}
