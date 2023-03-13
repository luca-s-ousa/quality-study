import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from "react-native";

import Firebase from "../util/firebase";
import Listagem from "../Listagem";
import Home from "../Home";


export default function Editar({route}){
    const [materiaE, setMateriaE] = useState(route.params?.itemMateria)
    const [assuntoE, setAssuntoE] = useState(route.params?.itemAssunto)
    const [diaE, setDiaE] = useState(route.params?.itemDia)
    const [mesE, setMesE] = useState(route.params?.itemMes)
    const [anoE, setAnoE] = useState(route.params?.itemAno)
    const [inicioE, setInicioE] = useState(route.params?.itemInicio)
    const [fimE, setFimE] = useState(route.params?.itemFim)
    const navigation = useNavigation();

    const chave = route.params?.itemKey

    

    async function atualizaDados(){
        if(materiaE!="" && assuntoE!="" && diaE !="" && mesE !="" && anoE !="" && inicioE!="" && fimE!=""){
            await Firebase.database().ref('qs').child(chave).update({
                materia:materiaE,
                assunto:assuntoE,
                dia:diaE,
                mes:mesE,
                ano:anoE,
                inicio:inicioE,
                fim:fimE
            })
    
            alert("Tarefa Atualizada Com Sucesso!")
        }else{
            alert('Você não preencheu todos os campos!')
        }
        
    }

    return(
        <ScrollView  style={styles.principal}>

            <View style={styles.barraTopo}>
                <View>
                    <Text style={styles.textoTopo}>Editar Tarefa</Text>
                </View>
            
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image
                    source={require('../Icons/home.png')}
                    style={{width:30, height:30}}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.containerPricipal}>
                <View style={{marginVertical:30}}>
                    <View> 
                        <Text style={styles.textos}>Matéria:</Text>
                        <View>
                            <TextInput style={{color:'#1E90FF', textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                            underlineColorAndroid="transparent"
                            onChangeText={(texto) => setMateriaE(texto)}
                            value={materiaE}/>
                        </View>
                    </View>

                    <View style={{marginVertical:30}}>
                        <Text style={styles.textos}>Assunto:</Text>
                        <View style={{justifyContent:'flex-start'}}>
                            <TextInput multiline={true} style={{color:'#1E90FF',paddingLeft:10,textAlign:'justify',fontSize:18,borderWidth:3,borderColor:'#00BFFF',backgroundColor:"#B0E0E6", borderRadius:14, height:150}}
                            underlineColorAndroid="transparent"
                            onChangeText={(texto) => setAssuntoE(texto)}
                            value={assuntoE}/>
                        </View>
                    </View>

                    <View style={{marginVertical:30}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{flex:1}}>
                                <Text style={styles.textos}>Dia:</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setDiaE(texto)}
                                    value={diaE}/>
                                </View>
                            </View>

                            <View style={{flex:1, marginHorizontal:14}}>
                                <Text style={styles.textos}>Mês:</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setMesE(texto)}
                                    value={mesE}/>
                                </View>
                            </View>

                            <View style={{flex:1}}>
                                <Text style={styles.textos}>Ano:</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setAnoE(texto)}
                                    value={anoE}/>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={{marginVertical:30}}>
                        <View  style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <View style={{flex:1, marginRight:14}}>
                                <Text style={styles.textos}>Início:</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setInicioE(texto)}
                                    value={inicioE}/>
                                </View>
                            </View>

                            <View style={{flex:1}}>
                                <Text style={styles.textos}>Fim:</Text>
                                <View >
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF',backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setFimE(texto)}
                                    value={fimE}/>
                                </View>
                            </View>


                        </View>
                    </View>

                        
                    <View style={{marginVertical:30}}>
                        <TouchableOpacity style={{backgroundColor:"#00BFFF", justifyContent:"center", borderRadius:14, height:50}}
                        onPress={()=>atualizaDados()}>
                            <Text style={{textAlign:"center", fontSize:25, color:'white'}}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    principal:{
        flex:1, 
        marginBottom:5, 
        marginTop:30,
        backgroundColor:'#87CEEB'
    },

    barraTopo:{
        backgroundColor:'#00BFFF', 
        height:70, marginBottom:10, 
        justifyContent:"space-between", 
        alignItems:"center", 
        flexDirection:'row', 
        padding:10, 
        paddingHorizontal:15
    },
    textoTopo:{
        color:'white', 
        fontSize:30
    },

    containerPricipal:{
        flex:1, 
        margin:10, 
        marginBottom:10, 
        justifyContent:"space-between"
    },

    textos:{
        marginLeft:15, 
        fontSize:25,
        color:'#1E90FF'
    }
})