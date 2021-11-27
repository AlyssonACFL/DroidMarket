import React from "react";

interface Produto{
    codigo?: number;
    nomeProduto: String;
    secao: String;
    valor: number;
    quantidade: number;
    unidade: String;
    marca: String;
    dataValidade: Date;
    dataFabricacao: Date;
}