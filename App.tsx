import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import Add from "./src/components/produto/input/Add";
import Edit from "./src/components/produto/input/Edit";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Novo" component={Add}/>
        <Stack.Screen name="Editar" component={Edit}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;