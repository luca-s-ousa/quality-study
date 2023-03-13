import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"
import Editar from "../Editar";
import Listagem from "../Listagem";
import Firebase from "../util/firebase";

export default function Home({ route }){
    const userAtual = route.params?.itemUser
    async function logout(){
        await Firebase.auth().signOut();
        alert('Você saiu da sua conta!');
        navigation.navigate('Login');
    }

    const [quaStudy,setQuaStudy] = useState([])

    const navigation = useNavigation();

    useEffect(()=>{
        Firebase.database().ref('qs').on('value', (snapshot)=>{

            setQuaStudy([]);
            snapshot.forEach((childItem)=>{
                let data = {
                    key: childItem.key,
                    materia: childItem.val().materia,
                    assunto: childItem.val().assunto,
                    dia: childItem.val().dia,
                    mes: childItem.val().mes,
                    ano: childItem.val().ano,
                    inicio: childItem.val().inicio,
                    fim: childItem.val().fim
                }
                setQuaStudy(oldArray =>[... oldArray, data].reverse());
            })
        })
    }, [])
    
    function handleDelete(key){
        Firebase.database().ref('qs').child(key).remove().then(()=>{
            const findTasks = quaStudy.filter(item => item.key !== key)
            setQuaStudy(findTasks)
        })
    }

    return(
        <View style={{flex:1, marginBottom:20, marginTop:30}}>
            <View style={{backgroundColor:'#00BFFF', height:70, marginBottom:10, justifyContent:"space-between", alignItems:"center", flexDirection:'row', padding:10, paddingHorizontal:15}}>
                <View>
                    <Text style={{color:'white', fontSize:30}}>Tarefas</Text>
                </View>
                
                <TouchableOpacity onPress={()=>logout()}>
                    <Image
                    source={require('../Icons/power.png')}
                    style={{width:30, height:30}}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={{flex:1,marginHorizontal:10, justifyContent:"center"}}>
                <View style={{alignItems:"center"}}>
                    <Text style={{color:'#1E90FF', fontSize:17}}>{userAtual}</Text>
                    
                </View>
                
                <FlatList
                keyExtractor={item =>item.key}
                data={quaStudy}
                renderItem={({item})=>(<Listagem  data={item}  deleteItem={handleDelete}/>)}   
                />
                <View style={{alignItems:"flex-end", justifyContent:"flex-end"}}>
                    <TouchableOpacity style={{backgroundColor:"#00BFFF", justifyContent:"center", borderRadius:30, height:60, width:60, margin:10}} onPress={()=>navigation.navigate('Inserir')}>
                        <Text style={{textAlign:"center", color:"white", fontSize:30}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})