import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end", //위치 값
        paddingHorizontal: 30, //사이드 여백
        paddingVertical: 100, //위아래 여백
        backgroundColor: "skyblue"
    },
    text: {
        color : "black",
        fontSize: 30,
    }

});