import React from "react";

import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import Firebase from "../util/firebase";
import { useNavigation } from "@react-navigation/native";

export default function Listagem({ data, deleteItem }){
    const navigation = useNavigation();
    async function remover(){
        Firebase.database().ref(data.key).remove()
    }
    return(
        
        <View>
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.text}>Matéria: {data.materia}</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Assunto: {data.assunto}</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Data: {data.dia}/{data.mes}/{data.ano}</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Início: {data.inicio}</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Fim: {data.fim}</Text>
                    </View>
                </View>

                <View style={{justifyContent:'space-between'}}>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Editar', {
                        itemKey: data.key,
                        itemMateria: data.materia,
                        itemAssunto: data.assunto,
                        itemDia: data.dia,
                        itemMes:data.mes,
                        itemAno:data.ano,
                        itemInicio: data.inicio,
                        itemFim:data.fim})}>
                        <Image
                        source={require('../Icons/edit.png')}
                        style={{width:30, height:30}}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>deleteItem(data.key)}>
                        <Image
                        source={require('../Icons/file-delete.png')}
                        style={{width:30, height:30}}/>
                    </TouchableOpacity>
                </View>

                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        marginBottom:5,
        padding:10,
        backgroundColor:"#1E90FF",
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:14
    },
    text:{
        color:'#FFFFFF',
        fontSize:20
    }
});