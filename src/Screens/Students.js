import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Student() {
    return (
        <ScrollView>
            <View>
            <View style={styles.Cart}>
                <Text style={{color: 'grey'}}>Name: M.Asif Khan</Text>
                <Text style={{color: 'grey'}}>Country: Pakistan</Text>
                <Text style={{color: 'grey'}}>City: Karachi</Text>
                <Text style={{color: 'grey'}}>Contact No:+92 33 1764 0604</Text>
                <Text style={{color: 'grey'}}>Skills: Mern Stack Developer</Text>
                <Text style={{color: 'grey'}}>Qualification: Postgraduate</Text>
                <View style={styles.btn}><TouchableOpacity activeOpacity={0.8} style={styles.btn1} onPress={()=> alert('Selected')}>
                <Text style={styles.btnTxt}>Select</Text>
                </TouchableOpacity></View>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Cart: {
        marginTop: 30,
        marginLeft: 70,
        alignItems: 'center',
        borderColor: 'white',
        height:220,
        width:"60%",
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
        color: 'grey'
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
})