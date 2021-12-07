import React from "react";
import { Button, View } from "react-native";
import Add from "./produto/input/Add";
import Produto from "../models/Produto";
import { NavigationContainer } from "@react-navigation/native";

export let database : Produto[] = [];

interface Input{
    navigation:any
}

const Home = ({navigation} : Input) =>{
    return (
        <View>
            <Button 
                title="Novo"
                onPress= { () => { navigation.navigate('Novo') }}/>
            <Button 
                title="Editar"
                onPress= { () => { navigation.navigate('Editar') }}/>
            <Button 
                title="Listar"
                onPress= { () => { navigation.navigate('Listar') }}/>
        </View>
    )
}

export default Home;