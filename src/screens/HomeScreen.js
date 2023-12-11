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

        <Button
            title="Go to Image screen"
            onPress={() => navigation.navigate('ImageScreen')}
        />

        <Button
            title="Go to Color screen"
            onPress={() => navigation.navigate('ColorScreen')}
        />

        <Button
            title="Go to Counter screen"
            onPress={() => navigation.navigate('CounterScreen')}
        />
        <Button
            title="Go to Square screen"
            onPress={() => navigation.navigate('SquareScreen')}
        />
    </View >);
}

const style = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen