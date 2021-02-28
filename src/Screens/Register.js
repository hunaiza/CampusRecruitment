import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker, Image, CheckBox } from 'react-native';


function Register(props) {
    const [selectedValue, setSelectedValue] = useState("Blood Group");
    const image = { uri: "data:image/jpeg;base64,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" };
    const [isSelected, setSelection] = useState(false);

    
    return (
        <View style={styles.container}>
           <Image style= { styles.backgroundImage } source={image}></Image>
            <View style={styles.Lheading}><Text style={{ fontSize: 32, color: 'black', marginTop: 70, fontWeight: 'bold' }}></Text></View>
            <View style={styles.elevation}>
            <View style={styles.inputText}><TextInput placeholder="Full Name"></TextInput></View>
            <View style={styles.inputText}><TextInput keyboardType="email-address" placeholder="Email"></TextInput></View>
            <View style={styles.inputText}><TextInput placeholder="Skills"></TextInput></View>
            <View style={styles.inputText}><TextInput secureTextEntry={true} placeholder="Password"></TextInput></View>
            <View style={styles.inputText}><TextInput keyboardType="numeric" placeholder="Phone Number"></TextInput></View>
            <View style={styles.inputText}><TextInput  placeholder="Country"></TextInput></View>
            <View style={styles.inputText}><TextInput  placeholder="City"></TextInput></View>
            <View style={styles.inputText1}><Text style={styles.inputBtn}>Qualification:</Text>
            <Picker style={styles.pickerValue}
            selectedValue={selectedValue}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Metric" value="Metric" />
            <Picker.Item label="Intermediate" value="Intermediate" />
            <Picker.Item label="Undergraduate" value="Undergraduate" />
            <Picker.Item label="Postgraduate" value="Postgraduate" />
            <Picker.Item label="Masters" value="Master" />
            <Picker.Item label="Ph.d" value="Ph.d" />
            <Picker.Item label="M.Phil" value="M.Phil" />
            </Picker>
            </View>
            </View>
            
            {/* <View style={styles.inputText}><TextInput placeholder="Blood group"></TextInput></View> */}
            <View style={styles.btn}><TouchableOpacity activeOpacity={0.8} style={styles.btn1} onPress={()=> props.navigation.navigate("Student")}>
                <Text style={styles.btnTxt}>Register</Text>
            </TouchableOpacity></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -100,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    Lheading: {
        marginBottom: 30,
        fontStyle: 'italic'
    },
    inputText: {
        width: 200,
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    btn1: {
        width: 140,
        height: 40,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#C0C0C0'
    },
    btnTxt: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        marginTop: 2,
    },
    pickerItem: {
        backgroundColor: 'blue'
    },
    inputText1: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
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
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.7,
        height: 280,
        resizeMode: 'contain',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        color: 'black'
    },
    label: {
        margin: 8,
    }
})

export default Register;