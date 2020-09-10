import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.skyblueView}>
        <Text style={styles.text}>Hello!!</Text>
      </View>
      <View style={styles.pinkView}>
        <Text style={styles.text}>Hello!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  pinkView: {
    flex:5,
    backgroundColor:'pink'
  },

  skyblueView:{
    flex: 1,
    backgroundColor : 'skyblue'
  },

  text: {
    color : "white"
  }
});
