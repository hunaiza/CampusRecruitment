import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Picker, TouchableOpacity } from 'react-native';

export default function SellBlood() {
    const [selectedValue, setSelectedValue] = useState("Blood Group");
    return (
        <View style={styles.Container}>
            <Image style= { styles.backgroundImage } source={{uri: "http://www.bloodrh.com/img/02.jpg"}}></Image>
            <View style={styles.inputText1}><Text style={styles.inputBtn}>Which Blood Group?</Text>
            <Picker style={styles.pickerValue}
            selectedValue={selectedValue}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
            </Picker>
            </View>
            <View style={styles.box}>
                <Text >Name:</Text>
                <Text style={{marginTop: 15}}>Contact Number:</Text>
                <Text style={{marginTop: 15}}>Country:</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={()=> alert("Submitted")} style={{borderRadius: 50,width: 100, height: 40, marginLeft: 220, marginTop: -50}}>
                <Image source={{uri: "https://image.flaticon.com/icons/png/512/61/61222.png"}} style={{height: 30, width: 30}}></Image>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginTop: 30,
        marginLeft: 70,
        borderColor: 'white',
        height:130,
        width:"75%",
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
    backgroundImage: {
        height: '50%',
        width: '100%',
        resizeMode: 'contain',
        marginTop: -30
    },
    inputText1: {
        flexDirection: 'row',
    },
    inputBtn: {
        fontSize: 17,
        marginRight: 20,
        marginTop: 15,
        color: 'grey'
    },
    pickerValue: {
        backgroundColor: 'green',
        width: 20
    },
    inputText1: {
        alignItems: 'center'
    }
})