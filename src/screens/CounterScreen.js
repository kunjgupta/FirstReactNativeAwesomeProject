import React, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, currentCount: (state.currentCount + action.payload)}
        case 'decrement':
            return {...state, currentCount: state.currentCount - action.payload}
        default: return state
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {currentCount:0});

    return (
        <View>
            <Button title="Increment"
                onPress={() => {
                    dispatch({ type: 'increment', payload: 1 })
                }}
            />
            <Button title="Decrement"
                onPress={() => {
                    dispatch({ type: 'decrement', payload: 1 })
                }}
            />
            <Text>{"Value : " + state.currentCount}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen;