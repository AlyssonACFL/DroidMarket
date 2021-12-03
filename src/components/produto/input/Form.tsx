import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Produto from "../../../models/Produto";
import DateField from 'react-native-datefield'
interface Input {
    produto: Produto
    setProduto : any
}

const Form = ( {produto, setProduto} : Input  ) => {

    return (
        <View>
            <TextInput placeholder="Código do Produto" 
                keyboardType='numeric'
                value={produto.codigo?.toString()}
                onChangeText = {codigo => setProduto({
                    ...produto,
                    codigo: codigo
                })}
                />
            <TextInput placeholder="Nome do Produto" 
                value={produto.nomeProduto}
                onChangeText = {nome => setProduto({
                    ...produto,
                    nomeProduto: nome
                })}
                />
            <TextInput placeholder="Seção do Produto" 
            value={produto.secao}
            onChangeText = {secao => setProduto({
                ...produto,
                secao: secao
            })}
            />
            <TextInput placeholder="Valor do Produto" 
                keyboardType='numeric'
                value={produto.valor?.toString()}
                onChangeText = {valor => setProduto({
                    ...produto,
                    valor: valor
                })}            
            />
            <TextInput placeholder="Quantidade do Produto" 
                keyboardType='numeric'
                value={produto.quantidade?.toString()}
                onChangeText = {quantidade => setProduto({
                    ...produto,
                    quantidade: quantidade
                })}
             />
            <TextInput placeholder="Unidade do Produto" 
                keyboardType='numeric'
                value={produto.valor?.toString()}
                onChangeText = {valor => setProduto({
                    ...produto,
                    valor: valor
                })}     
                />
            <TextInput placeholder="Marca do Produto" 
                value={produto.unidade}
                onChangeText = {unidade => setProduto({
                    ...produto,
                    unidade: unidade
                })}     
            />
            <Text>Data de Validade</Text>
            <DateField 
                labelDate = 'Dia'
                labelMonth = 'Mês'
                labelYear = 'Ano'
                value={produto.dataValidade}
                onSubmit = {dataValidade => setProduto({
                    ...produto,
                    dataValidade: dataValidade
                })}     
            />
            <Text>Data de Fabricação</Text>
            <DateField 
                labelDate = 'Dia'
                labelMonth = 'Mês'
                labelYear = 'Ano'
                value={produto.dataFabricacao}
                onSubmit = {dataFabricacao => setProduto({
                    ...produto,
                    dataFabricacao: dataFabricacao
                })}     
            />
        </View>
    );
}

export default Form;