import react from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (<View>
        <ImageDetail name="Forest" imageSource={require('../../assets/forest.jpg')} imageScore = '9'/>
        <ImageDetail name="Beach" imageSource={require('../../assets/beach.jpg')} imageScore = '3'/>
        <ImageDetail name="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore = '6'/>
    </View>);
};

const styles = StyleSheet.create({});

export default ImageScreen;