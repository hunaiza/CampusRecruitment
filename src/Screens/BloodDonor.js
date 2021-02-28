import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

export default function BloodDonor() {
    return (
        <ScrollView>
        <View>
            <View style={styles.Cart}>
                <Text style={{color: 'grey'}}>Name: M.Asif Khan</Text>
                <Text style={{color: 'grey'}}>Country: Pakistan</Text>
                <Text style={{color: 'grey'}}>City: Karachi</Text>
                <Text style={{color: 'grey'}}>Contact No:+92 33 1764 0604</Text>
                <Text style={{color: 'grey'}}>Blood Group: A+</Text>
            </View>
            <View style={styles.Cart}>
                <Text style={{color: 'grey'}}>Name: Ayesha Hussain</Text>
                <Text style={{color: 'grey'}}>Country: USA</Text>
                <Text style={{color: 'grey'}}>City: Houston</Text>
                <Text style={{color: 'grey'}}>Contact No:+1 281 509 6995</Text>
                <Text style={{color: 'grey'}}>Blood Group: B-</Text>
            </View>
            <View style={styles.Cart}>
                <Text style={{color: 'grey'}}>Name: Suzan Jackson</Text>
                <Text style={{color: 'grey'}}>Country: Canada</Text>
                <Text style={{color: 'grey'}}>City: Toronto</Text>
                <Text style={{color: 'grey'}}>Contact No:+1 250 555 0199</Text>
                <Text style={{color: 'grey'}}>Blood Group: B+</Text>
            </View>
            <View style={styles.Cart}>
                <Text style={{color: 'grey'}}>Name: Sarah Shah</Text>
                <Text style={{color: 'grey'}}>Country: Pakistan</Text>
                <Text style={{color: 'grey'}}>City: Hyderabad</Text>
                <Text style={{color: 'grey'}}>Contact No:+92 33 1764 0604</Text>
                <Text style={{color: 'grey'}}>Blood Group: 0</Text>
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
        height:120,
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