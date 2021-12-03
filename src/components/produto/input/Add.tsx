import React, { useState } from "react";
import { Button, View } from "react-native";
import Produto from "../../../models/Produto";
import Form from "./Form";
import {database} from "../../Home"

function salvar ( produto :Produto ){
    console.log("Novo Produto:", produto)
    database.push(produto)
}

const Add = () => {
    const [produto, setProduto] = useState<Partial<Produto>>({}); 
    return (
        <View>
            <Form produto = {produto as Produto} setProduto={setProduto}/>
            <Button title='Salvar'
                onPress={() => {
                salvar(produto as Produto)
            }}/>
        </View>
    )
}

export default Add;