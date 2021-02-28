import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function Student() {
    return (
        <ScrollView>
            <View>
            <View style={styles.Cart}>
                <Text style={{color: 'grey'}}>Name: M.Asif Khan</Text>
                <Text style={{color: 'grey'}}>Skill: MERN stack</Text>
                <Text style={{color: 'grey'}}>Country: Pakistan</Text>
                <Text style={{color: 'grey'}}>City: Karachi</Text>
                <Text style={{color: 'grey'}}>Contact No:+92 33 1764 0604</Text>
                <Text style={{color: 'grey'}}>Qualification: Intermediate</Text>  
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
        height:140,
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
})