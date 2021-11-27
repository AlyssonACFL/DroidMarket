interface Produto{
    codigo?: number;
    nomeProduto?: string;
    secao?: string;
    valor?: number;
    quantidade?: number;
    unidade?: string;
    marca?: string;
    dataValidade?: Date;
    dataFabricacao?: Date;
}

export default Produto;