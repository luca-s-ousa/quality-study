import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../util/firebase";
export default function Cadastrar(){
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function cadastrar(){
        await Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((value) => {
            
            alert('Usuário Criado: ' + value.user.email);
            navigation.navigate('Login');
        })
        .catch((error) =>{
            if(error.code === 'auth/weak-password'){
                alert('Sua senha deve ter pelo menos 6 caracteres');
                return;
            }
            if(error.code === 'auth/invalid-email'){
                alert('E-mail Inválido!');
                return;
            }else{
                alert('Ops algo deu errado!');
                return;
            }
        })
    }

    return(
        <ScrollView style={styles.login}>
            <View style={{ justifyContent:"flex-start", marginVertical:30}}>
                <Text style={styles.titulo}>QualityStudy</Text>
            </View>

            <View style={{marginVertical:30}}>
                <Text style={styles.textLogin}>Cadastro</Text>
            </View>
            

            <View style={{marginVertical:30}}>
                <Text style={styles.texto}>E-mail:</Text>
                <View>
                    <TextInput style={styles.inputs}
                    underlineColorAndroid="transparent"
                    onChangeText={(texto) => setEmail(texto)}
                    value={email}/>
                </View>
            </View>

            <View style={{justifyContent:"flex-start", marginVertical:30}}>
                <Text style={styles.texto}>Senha:</Text>
                <View>
                    <TextInput style={styles.inputs}
                    underlineColorAndroid="transparent"
                    onChangeText={(texto) => setPassword(texto)}
                    value={password}/>
                </View>
            </View>

            <TouchableOpacity style={styles.inpuCadastrar} onPress={() => cadastrar()}>
                <Text style={styles.botaoText}>Cadastrar</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row', justifyContent:"center", marginVertical:30}}>
                <Text style={{color:'white', fontSize:20}}>Já possui uma conta?</Text>
                <TouchableOpacity style={{paddingLeft:5}} onPress={()=>navigation.navigate('Login')}>
                    <Text style={{color:'#00008B', fontSize:20}}>Clique aqui!</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    login:{
        flex:1,
        backgroundColor:"#00BFFF",
        padding:30,

    },
    texto:{
        fontSize:20,
        color:"#1E90FF",
        textAlign:"left",
        paddingLeft:14
    },
    titulo:{
        fontSize:50,
        color:"white",
        textAlign:"center"
    },
    textLogin:{
        fontSize:30,
        color:"white",
        textAlign:"center"
    }, 
    botaoText:{
        fontSize:20,
        color:"white",
        textAlign:"center"
    },
    inputs:{
        backgroundColor:"#B0E0E6", 
        justifyContent:"center",
        height:50,
        borderRadius:14,
        borderWidth:3,
        borderColor:'#1E90FF',
        fontSize:20,
        paddingLeft:20,
        color:'#1E90FF'
    },
    inpuCadastrar:{
        backgroundColor:"#1E90FF", 
        justifyContent:"center",
        height:50,
        borderRadius:14,
        marginTop:50,
        marginVertical:30
    }
})