import React, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ColorCounterScreen from "../components/ColorCounter";

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
    //state ==== {red: number; green: number; blue: number}
    //action == {type: `change_red` || `change_green` || `change_blue`, payload: 15 || -15}

    switch (action.type) {
        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : { ...state, red: (state.red + action.payload)}

        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : { ...state, green: (state.green + action.payload)}

        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : { ...state, blue: (state.blue + action.payload)}

        default: return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const {red, green, blue} = state; 
    return (
        <View>
            <ColorCounterScreen
                colorName="Red"
                onIncrese={() => dispatch({type: 'change_red', payload : COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload : -1 * COLOR_INCREMENT})} />

            <ColorCounterScreen
                colorName="Green"
                onIncrese={() => dispatch({type: 'change_green', payload : COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload : -1 * COLOR_INCREMENT})} />

            <ColorCounterScreen
                colorName="Blue"
                onIncrese={() => dispatch({type: 'change_blue', payload : COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload : -1 * COLOR_INCREMENT})} />

            <View style={{width: 150, height: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
        </View>
    );
};

const style = StyleSheet.create({});

export default SquareScreen;