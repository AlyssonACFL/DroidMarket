import React from "react";
import {FlatList, Text, View} from "react-native";
import {database} from "../../Home";
import firestore from '@react-native-firebase/firestore'
import Produto from "../../../models/Produto";

interface Input{
    navigation:any
}

function atualizarDados(){

    firestore()
        .collection('produto_supermercado')
        .onSnapshot(document => {
            if(database.length>0) 
                database.splice(0, database.length);
            
            document.docs.map(
                (doc) =>{
                    database.push(doc.data() as unknown as Produto);
                }
            );
        });
}

const Listar = ( {navigation} : Input) =>{

    React.useEffect(
        () => {
            const subscribe = navigation.addListener('focus',
            atualizarDados);
            return subscribe;
        }, [navigation]);

    return (
        <View>
            <Text>Produtos</Text>
            <FlatList style={{flex : 1}}
            extraData={[]}
            data={database}
            renderItem={
                ({item}) =>
                <Text> {item.nomeProduto} </Text>
            }
            />
        </View>
    );

};

export default Listar;