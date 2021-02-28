import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Picker, TouchableOpacity } from 'react-native';

export default function SellBlood() {
    const [selectedValue, setSelectedValue] = useState("Blood Group");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.Container}>
            <Image style= { styles.backgroundImage } source={{uri: "https://img.trademed.com/images/news/articles/article_images/2016-12-15/SDD-159.jpg"}}></Image>
            <View style={styles.box}>
                <TextInput placeholder="Full Name" style={styles.input}></TextInput>
                <TextInput placeholder="Email" style={styles.input}></TextInput>
                <TextInput placeholder="Phone Number" style={styles.input}></TextInput>
                <TextInput placeholder="Country" style={styles.input}></TextInput>
                <View style={styles.inputText1}><Text style={styles.inputBtn}>Blood Group:</Text>
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
                <TouchableOpacity activeOpacity={0.8} onPress={()=> alert("Submitted")} style={{backgroundColor: 'red', borderRadius: 50,width: 100, height: 40, marginLeft: 20, marginTop: 30}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center', marginTop: 5}}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {

    },
    backgroundImage: {
        height: '35%',
        width: '100%',
    },
    box: {
        alignItems: 'center',
        
    },
    input: {
        width: 200,
        height: 40,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    pickerItem: {
        backgroundColor: 'blue'
    },
    inputText1: {
        flexDirection: 'row',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    inputBtn: {
        fontSize: 17,
        marginRight: 2,
        marginTop: 15,
        color: '#A9A9A9'
    },
    pickerValue: {
        backgroundColor: 'green',
        width: 20
    },
})