import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
    return (
        <View style = {styles.backgroundStyle}>
            <AntDesign style = {styles.iconStyle}
            name="search1" size={30} color="black" />
            <TextInput style = {styles.inputStyle}
            placeholder='Ara' />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: { 
        backgroundColor:'lightgray',
        flexDirection: 'row',
        margin: 10,
        height:50,
        alignItems:'center',
        borderRadius:20,
    },
    iconStyle: {
        marginHorizontal: 15,

    },
    inputStyle:{ 
        flex:1,
        fontSize: 18,
    },

});