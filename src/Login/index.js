import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../util/firebase";
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [user, setUser] = useState('');

    async function logar(){
        await Firebase.auth().signInWithEmailAndPassword(email, password)
        .then((value) => {
            
            alert('Bem-vindo(a): ' + value.user.email);
            setUser(value.user.email);
            navigation.navigate('Home', {itemUser:value.user.email})
            
            
        })
        .catch((error) =>{
            alert('Ops algo deu errado!');
            return;
        })
    }

    return(
        <ScrollView style={styles.login}>
            <View style={{ justifyContent:"flex-start", marginVertical:30}}>
                <Text style={styles.titulo}>QualityStudy</Text>
            </View>

            <View>
                <Text style={styles.textLogin}>Login</Text>
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

            <View style={{justifyContent:"flex-start",marginVertical:30}}>
                <Text style={styles.texto}>Senha:</Text>
                <View>
                    <TextInput style={styles.inputs}
                    underlineColorAndroid="transparent"
                    onChangeText={(texto) => setPassword(texto)}
                    value={password}/>
                </View>
            </View>

            <TouchableOpacity style={styles.inputEntrar} onPress={()=>logar()}>
                <Text style={styles.botaoText}>Entrar</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row', justifyContent:"center", marginVertical:30}}>
                <Text style={{color:'white', fontSize:20}}>Não tem uma conta?</Text>
                <TouchableOpacity style={{paddingLeft:5}} onPress={()=>navigation.navigate('Cadastrar')}>
                    <Text style={{color:'#00008B', fontSize:20}}>Cadastre-se</Text>
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
        textAlign:"center",
        marginVertical:30
    }, 
    botaoText:{
        fontSize:17,
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
    inputEntrar:{
        backgroundColor:"#1E90FF", 
        justifyContent:"center",
        height:50,
        borderRadius:14,
        marginTop:50,
        marginVertical:30
    }
})