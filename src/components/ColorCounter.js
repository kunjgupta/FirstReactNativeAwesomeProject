import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColorCounterScreen = ({ colorName, onIncrese, onDecrease }) => {
    return (
        <View>
            <Text>{colorName}</Text>
            <Button title={`More ${colorName}`} onPress={() => onIncrese()} />
            <Button title={`Less ${colorName}`} onPress={() => onDecrease()} />
        </View>
    );
};

const style = StyleSheet.create({});

export default ColorCounterScreen;