import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (<View>
        <Button
            title="Go to Components Demo"
            onPress={() =>
                navigation.navigate('ComponentScreen')
            }
        />
        <Button
            title="Go to list screen"
            onPress={() => navigation.navigate('ListScreen')}
        />
    </View >);
}

const style = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen