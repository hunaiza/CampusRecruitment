import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default function SellBlood() {
    return (
        <ImageBackground source={{uri: "https://www.pestcontrolindia.com/wp-content/uploads/2016/10/hb-level.jpg"}} style={{height: 180, width: 'auto', resizeMode:'contain'}}>
        <View style={styles.Container}>
            <View>
                <Text style={{textAlign: 'center', fontSize: 29}}>Things You should know..</Text>
                <Text style={{marginTop: 20}}>1) Blood banks collect blood and separate it into its various components so they can be used most effectively according to the needs of the patient.</Text>
                <Text style={{marginTop: 20}}>2) Here you can sell and buy blood of any group easily.</Text>
                <Text style={{marginTop: 20}}>3) If you have any query regarding selling or buying of blood so you can contact us via whatsapp or email.</Text>
                <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
                <Image source={{uri: "https://icons.iconarchive.com/icons/icons8/windows-8/512/Mobile-Phone-icon.png"}} style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
                <Text style={{marginLeft: 10}}>+1 329 679 590</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png"}} style={{height: 30, width: 30, marginLeft: -10}}></Image>
                    <Text style={{marginLeft: 10, marginTop: 5}}>bankblood@outlook.com</Text></View>
                </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 100,
        marginLeft: 60,
        borderColor: 'white',
        height:'auto',
        width:"70%",
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:10,
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    
})