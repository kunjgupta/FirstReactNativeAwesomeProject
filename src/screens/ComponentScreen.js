import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = <Text>Open up App.js to start working on your app!</Text>
    const name = 'Kunj'
    const firstText = <Text style = {componentFontStyle.textStyle}>Getting started with React Native!</Text>
    const myName = <Text style = {componentFontStyle.subHeaderStlye}>My name is {name}</Text>
    return (
        <View>
            {/* <Text style={componentFontStyle.textStyle}>First Component for Display</Text>
            {greeting} */}
            <Text style = {componentFontStyle.textStyle}>Getting started with React Native!</Text>
            {myName}
        </View>
    );
};

const componentFontStyle = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },

    subHeaderStlye: {
        fontSize:25
    }
})

export default ComponentsScreen;