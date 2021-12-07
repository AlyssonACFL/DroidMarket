import React, { useState } from "react";
import { Button, View } from "react-native";
import Produto from "../../../models/Produto";
import Form from "./Form";

function editar(){
    console.log("Editar")
}

function Edit(){
    const [produto, setProduto] = useState<Partial<Produto>>({
    codigo: 1,
    nomeProduto: "Teste",
    dataFabricacao: new Date(2021,12,6)
    });

    return (<View>
        <Form produto={produto as Produto} setProduto={setProduto}/>
        <Button
            title="Salvar Alteracoes"
            onPress={editar}
        />
    </View>)
}

export default Edit;