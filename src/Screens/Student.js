import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, ImageBase } from 'react-native';
// import * as firebase from 'firebase';
import database from '@react-native-firebase/database';

// var firebaseConfig = {
//     apiKey: "AIzaSyAz9ZVZ3jfPlMT03LLSTPads539rHfIbUk",
//     authDomain: "bloodbank-5d3fa.firebaseapp.com",
//     databaseURL: "https://bloodbank-5d3fa-default-rtdb.firebaseio.com",
//     projectId: "bloodbank-5d3fa",
//     storageBucket: "bloodbank-5d3fa.appspot.com",
//     messagingSenderId: "348786403729",
//     appId: "1:348786403729:web:fabf3a7447c7c5a3af5230",
//     measurementId: "G-S59VWYYTQ6"
//   };

// firebase.initializeApp(firebaseConfig);
  

export default function Main(props) {
    // const [Name, setName] = useState("Hunaiza Solanki");
    // const [Email, setEmail] = useState("huniisolanki10@gmail.com");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Save_data = () => {
        let user = {
            email,
            password
        }
        console.log("User==>", user)
        // database().ref('/').child('users').push(user)
    }

    const gotoLogin = () => {
        props.navigation.navigate("StudentLogin")
    }

    const combine = () => {
        gotoLogin();
        Save_data();   
    }

    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.header}><Text style={styles.headerT}>Blood Bank</Text></View>
            <View style={styles.Login}>
            <Image style={styles.image} source={{uri: "https://secure.webtoolhub.com/static/resources/icons/set44/7acf73fc.png"}}></Image>
            <TextInput keyboardType="email-address" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder = "Username"></TextInput>
            <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder = "Password" ></TextInput>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={combine}>
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.New}>New User? </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnB} onPress={()=> props.navigation.navigate("Register")} >
            <Text style={styles.btnR}>Register Now</Text>    
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 1,
    },
    Login: {
        marginTop: 10,
        flex: 12,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: 'grey',
        width: '100%',
        marginTop: -50,
    },
    headerT: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center'

    },
    paragraph: {
        padding: 10,
        color: 'grey',
        fontSize: 32,
    },
    image: {
        width: 500,
        height: 200,
        resizeMode: 'contain',
        marginTop: 100
    },
    input: {
        marginTop: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        height: 40,
        width: 200,
        alignItems: 'center',
        textAlign: 'center',
    },
    btn: {
        width: 100,
        backgroundColor: '#C0C0C0',
        height: 40,
        marginTop: 12,
        borderRadius: 20,
    },
    btnTxt: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        marginTop: 2,
    },
    New: {
        fontSize: 20,
        marginTop: 22,
        color: 'grey'
    },
    btnB: {
        width: 150,
        backgroundColor: '#C0C0C0',
        height: 40,
        marginTop: 12,
        borderRadius: 20,
        marginBottom: 170,
    },
    btnR: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop: 4,
        width: 150
    }
});