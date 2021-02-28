import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Student() {
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.inputText}><TextInput placeholder="Company Name" style={{fontSize: 20}}></TextInput></View>
            <View style={styles.inputText}><TextInput placeholder="Job Description" style={{fontSize: 20}}></TextInput></View>
            <View style={styles.inputText}><TextInput placeholder="Skills" style={{fontSize: 20}}></TextInput></View>
            <View style={styles.inputText}><TextInput keyboardType="numeric" placeholder="Eligibility Criteria" style={{fontSize: 20}}></TextInput></View>
            <View style={styles.inputText}><TextInput keyboardType="numeric" placeholder="Contact Number" style={{fontSize: 20}}></TextInput></View>
            <View style={styles.inputText}><TextInput placeholder="City" style={{fontSize: 20}}></TextInput></View>
            <View style={styles.btn}><TouchableOpacity activeOpacity={0.8} style={styles.btn1} onPress={()=> alert('Posted Successfully')}>
                <Text style={styles.btnTxt}>Post</Text>
            </TouchableOpacity></View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    inputText: {
        width: 200,
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 25,
        marginLeft: 20,
    },
    btnTxt: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        marginTop: 2,
    },
    btn1: {
        width: 140,
        height: 40,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#C0C0C0'
    },
    container: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        borderColor: 'white',
        height: 500,
        width:"auto",
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
        color: 'grey'
    }
})