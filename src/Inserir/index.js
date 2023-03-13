import React, {useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, SafeAreaView ,StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";


import Firebase from "../util/firebase";

export default function Inserir(){
    const [materia, setMateria] = useState('')
    const [assunto, setAssunto] = useState('')
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')
    const [inicio, setInicio] = useState('')
    const [fim, setFim] = useState('')
    const navigation = useNavigation();

    async function inserir(){
        if(materia!="" && assunto!="" && dia !="" && mes !="" && ano !="" && inicio!="" && fim!=""){
            let qs = await Firebase.database().ref('qs');

            let chave = qs.push().key;

            qs.child(chave).set({
                materia:materia,
                assunto:assunto,
                dia:dia,
                mes:mes,
                ano:ano,
                inicio:inicio,
                fim:fim
            });

            alert("Tarefa Adicionada Com Sucesso!");
            setMateria('');
            setAssunto('');
            setDia('');
            setMes('');
            setAno('');
            setInicio('');
            setFim('');
        }else{
            alert('Você não preencheu todos os campos!')
        }
        
    }

    return(

        <ScrollView style={styles.principal}>
            
            <View style={styles.barraTopo}>
                <View>
                    <Text style={styles.textoTopo}>Inserir Tarefa</Text>
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
                        <Text style={styles.textos}>Matéria</Text>
                        <View>
                            <TextInput style={{color:'#1E90FF', textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                            underlineColorAndroid="transparent"
                            onChangeText={(texto) => setMateria(texto)}
                            value={materia}/>
                        </View>
                    </View>

                
                    <View style={{marginVertical:30}}>
                        <Text style={styles.textos}>Assunto:</Text>
                        <View>
                            <TextInput multiline={true} style={{color:'#1E90FF',paddingLeft:10,textAlign:'justify',fontSize:18,borderWidth:3,borderColor:'#00BFFF',backgroundColor:"#B0E0E6", borderRadius:14, height:150}}
                            underlineColorAndroid="transparent"
                            onChangeText={(texto) => setAssunto(texto)}
                            value={assunto}/>
                        </View>
                    </View>

                    <View style={{marginVertical:30}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{flex:1}}>
                                <Text style={styles.textos}>Dia:</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setDia(texto)}
                                    value={dia}/>
                                </View>
                            </View>

                            <View style={{flex:1, marginHorizontal:14}}>
                                <Text style={styles.textos}>Mês</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setMes(texto)}
                                    value={mes}/>
                                </View>
                            </View>

                            <View style={{flex:1}}>
                                <Text style={styles.textos}>Ano:</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setAno(texto)}
                                    value={ano}/>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={{marginVertical:30}}>
                        <View  style={{flex:1,flexDirection:"row", justifyContent:"space-between"}}>
                            <View style={{marginRight:14}}>
                                <Text style={styles.textos}>Início:</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF', backgroundColor:"#B0E0E6", borderRadius:14, height:50, width:180}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setInicio(texto)}
                                    value={inicio}/>
                                </View>
                            </View>

                            <View>
                                <Text style={styles.textos}>Fim:</Text>
                                <View>
                                    <TextInput style={{color:'#1E90FF',textAlign:'center',fontSize:18,borderWidth:3,borderColor:'#00BFFF',backgroundColor:"#B0E0E6", borderRadius:14, height:50,width:180}}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(texto) => setFim(texto)}
                                    value={fim}/>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{flex:1, justifyContent:'flex-end', marginBottom:10, paddingVertical:30}}>
                        <TouchableOpacity style={{backgroundColor:"#00BFFF", justifyContent:"center", borderRadius:14, height:50}} onPress={()=>inserir()}>
                            <Text style={{textAlign:"center", fontSize:25, color:'white'}}>Inserir</Text>
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