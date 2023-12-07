import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = props => {
    console.log("Kunj: "+JSON.stringify(props));

    return (<View>
        {/* <Text style={style.text}>Hi There!</Text> */}
        <Button
            title="Go to Components Demo"
            onPress={() => 
                props.navigation.navigate('ListScreen')
                // { console.log("Button Pressed") }
                // props.navigate("ListScreen",{data:'From Home Screen'})
            }
        />

        <TouchableOpacity onPress={() => {console.log('List button pressed')}}>
        <Text>Go to List Screen</Text>
    </TouchableOpacity>

    </View >);
}

const style = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen