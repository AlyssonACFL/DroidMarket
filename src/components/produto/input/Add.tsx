import React from "react";
import { View } from "react-native";
import Produto from "../../../models/Produto";
import Form from "./Form";


const Add = () => {
    const produto: Produto = {
        nomeProduto: " "
    }
    return (
        <View>
            <Form produto = {produto}/>
        </View>
    )
}

export default Add;