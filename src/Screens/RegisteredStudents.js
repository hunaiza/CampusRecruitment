import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function RegisteredCustomer() {
    const [name, useName] = useState("Hunaiza")
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View>
                <Text style={{color: 'grey'}}>Name: M.Asif Khan</Text>
                <Text style={{color: 'grey'}}>Skill: MERN stack</Text>
                <Text style={{color: 'grey'}}>Country: Pakistan</Text>
                <Text style={{color: 'grey'}}>City: Karachi</Text>
                <Text style={{color: 'grey'}}>Contact No:+92 33 1764 0604</Text>
                <Text style={{color: 'grey'}}>Qualification: Intermediate</Text>  
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={()=> alert("Ok")}>
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"}} style={{height: 25, width: 25,marginTop: 10,marginLeft: 60}}></Image>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btn1} onPress={()=> alert("Ok")}>
                <Image source={{uri: "http://cdn.onlinewebfonts.com/svg/img_380808.png"}} style={{height: 25, width: 25,marginTop: 10,marginLeft: -30}}></Image>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 10,
        borderColor: 'white',
        height:150,
        width:"95%",
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    },
    card: {
        flexDirection: 'row'
    },
    btn: {
        marginLeft: 30,
    }, 
    btnTxt: {
        fontSize: 20
    },
    btnTxt1: {
        fontSize: 10,
        marginLeft: 30
    },
    btn1: {
        marginLeft: 30
    }
})