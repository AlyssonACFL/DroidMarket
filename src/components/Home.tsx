import React from "react";
import { View } from "react-native";
import Add from "./produto/input/Add";
import Produto from "../models/Produto";

export let database : Produto[] = [];


const Home = () =>{
    return (
        <View>
            <Add></Add>
        </View>
    )
}

export default Home;