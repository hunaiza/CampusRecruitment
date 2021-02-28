import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';


export default function AdminLogin(props) {
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
            <Image style={{height: 100, width: 100, marginTop: 50, resizeMode: 'contain'}} source={{uri: "https://cdn1.iconfinder.com/data/icons/business-elements-15/150/Firma-512.png"}} ></Image>
            <TouchableOpacity style={styles.btn2} activeOpacity={0.8} onPress={()=> props.navigation.navigate("Company")}>
            <Text style={styles.btnT}>Company</Text>    
            </TouchableOpacity>
            <Image style={{height: 100, width: 100, marginTop: 50}} source={{uri: "https://secure.webtoolhub.com/static/resources/icons/set44/7acf73fc.png"}}></Image>
            <TouchableOpacity style={styles.btn1} activeOpacity={0.8} onPress={()=> props.navigation.navigate("Student")}>
            <Text style={styles.btnT1}>Student</Text>    
            </TouchableOpacity>
            <Image style={{height: 100, width: 100, marginTop: 50, resizeMode: 'contain'}} source={{uri: "https://vignette.wikia.nocookie.net/fan-fiction-library/images/1/15/Admin.png/revision/latest?cb=20140917130743"}} ></Image>
            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={()=> props.navigation.navigate("Admin")}>
            <Text style={styles.btnT}>Admin</Text>    
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#C0C0C0',
        width: 160,
        height: 50,
        borderRadius: 40,
        alignItems: 'center'
    },
    btn1: {
        backgroundColor: '#C0C0C0',
        width: 160,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 10,
        alignItems: 'center'
    },
    btn2: {
        backgroundColor: '#C0C0C0',
        width: 190,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 10,
        alignItems: 'center'
    },
    btnT: {
        fontSize: 25,
        color: 'white',
        fontStyle: 'italic',
        marginTop: 7
    },
    btnT1: {
        fontSize: 25,
        color: 'white',
        fontStyle: 'italic',
        marginTop: 7,
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
    },
}) 