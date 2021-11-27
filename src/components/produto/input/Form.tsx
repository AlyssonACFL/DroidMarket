import React, { useState } from "react";
import { TextInput, View } from "react-native";
import Produto from "../../../models/Produto";

interface Input {
    produto: Produto
}

const Form = ( {produto} : Input  ) => {
    let setNomeProduto;
    [produto.nomeProduto, setNomeProduto] = useState("");

    return (
        <View>
            <TextInput placeholder="Código do Produto" />
            <TextInput placeholder="Nome do Produto" 
                value={produto.nomeProduto}
                onChangeText={ setNomeProduto }
                />
            <TextInput placeholder="Seção do Produto" />
            <TextInput placeholder="Valor do Produto" />
            <TextInput placeholder="Quantidade do Produto" />
            <TextInput placeholder="Unidade do Produto" />
            <TextInput placeholder="Marca do Produto" />
            <TextInput placeholder="Validade do Produto" />
            <TextInput placeholder="Fabricação do Produto" />
        </View>
    );
}

export default Form;