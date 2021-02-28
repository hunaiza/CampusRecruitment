import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Student(props) {
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>ABC Company</Text>
                <TouchableOpacity onPress={() => alert('Details')}>
                <Image source={{uri: "data:image/png;base64,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"}}
                style={{height: 25, width: 40, marginLeft: 50}}></Image></TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>ABC Company</Text>
                <TouchableOpacity onPress={() => alert('Details')}>
                <Image source={{uri: "data:image/png;base64,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"}}
                style={{height: 25, width: 40, marginLeft: 50}}></Image></TouchableOpacity>
                
            </View>            
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'grey',
        marginRight: 60,
        marginLeft: 10,
        width: 150
    },
    text1: {
        fontSize: 30,
        color: 'grey',
        marginRight: 60,
        marginLeft: 30,
        width: 70
    },
    card: {
        marginTop: 20,
        marginLeft: 10,
        borderColor: 'white',
        height:50,
        width: 340,
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    number: {
        fontSize: 30,
        marginLeft: -50
    }
})