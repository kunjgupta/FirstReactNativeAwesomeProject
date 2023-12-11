import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ColorCounterScreen from "../components/ColorCounter";

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)

    const setColor = (color, changes) => {
        //Color === `red`, `green`, `blue`
        //change === +15 -15

        switch (color) {
            case 'red': {
                (red + changes > 255 || red + changes < 0) ? null : setRed(red + changes)
                return;
            }

            case 'green': {
                (green + changes > 255 || green + changes < 0) ? null : setGreen(green + changes)
                return;
            }

            case 'blue': {
                (blue + changes > 255 || blue + changes < 0) ? null : setBlue(blue + changes)
                return;
            }
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounterScreen
                colorName="Red"
                onIncrese={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} />

            <ColorCounterScreen
                colorName="Green"
                onIncrese={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} />

            <ColorCounterScreen
                colorName="Blue"
                onIncrese={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} />

            <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    );
};

const style = StyleSheet.create({});

export default SquareScreen;