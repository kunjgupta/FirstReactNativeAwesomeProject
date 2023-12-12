import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                placeholder="Enter your input here"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)} />

            <Text>My name is {name}</Text>

            <Text>Enter Password</Text>
            <TextInput
                placeholder="Enter your input here"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                secureTextEntry={true}
                onChangeText={(newValue) => setPassword(newValue)} />

            {password.length <= 5 ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    );

}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default TextScreen;

