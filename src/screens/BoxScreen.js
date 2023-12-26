import React from "react";
import { Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View style = {style.viewStyle}>
            <Text  style = {style.textOneStyle}>Child #1</Text>
            <Text  style = {style.textTwoStyle}>Child #2</Text>
            <Text  style = {style.textThreeStyle}>Child #3</Text>
        </View>
    )
};

const style = StyleSheet.create({
    viewStyle : {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        alignItems:'flex-start',
        flexDirection: 'row'
    },
    textOneStyle : {
        borderWidth: 1,
        borderColor: 'red',
        flex:1
    },
    textTwoStyle : {
        borderWidth: 1,
        borderColor: 'blue',
        marginTop: 50,
        flex:1
    },
    textThreeStyle : {
        borderWidth: 1,
        borderColor: 'red',
        flex:1
    }
});

export default BoxScreen;