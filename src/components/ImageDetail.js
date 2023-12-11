import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource, name, imageScore}) => {
    return (
        <View>
            <Image source={imageSource}/> 
            <Text>{name}</Text>
            <Text>{"Image score - "+imageScore}</Text>
        </View>
    )
};

const style = StyleSheet.create({});

export default ImageDetail;