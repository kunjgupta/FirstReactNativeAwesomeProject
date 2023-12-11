import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CounterScreen = () => {

    const [currentCounter, setCounter] = useState(0)
    return (
        <View>
            <Button title="Increment"
                onPress={() => {
                    setCounter(currentCounter + 1)
                }}
            />
            <Button title="Decrement"
                onPress={() => {
                    setCounter(currentCounter - 1)
                }}
            />
            <Text>{"Value : " + currentCounter}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen;