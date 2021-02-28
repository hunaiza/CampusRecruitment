import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SameBlood() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>A+</Text>
                <Text style={styles.number}>35</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>A-</Text>
                <Text style={styles.number}>10</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>B+</Text>
                <Text style={styles.number}>17</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>B-</Text>
                <Text style={styles.number}>66</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text1}>AB+</Text>
                <Text style={styles.number}>7</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text1}>AB-</Text>
                <Text style={styles.number}>15</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>0+</Text>
                <Text style={styles.number}>5</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>0-</Text>
                <Text style={styles.number}>5</Text>
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
        fontSize: 30,
        color: 'grey',
        marginRight: 60,
        marginLeft: 50,
        width: 50
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
        width:"55%",
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