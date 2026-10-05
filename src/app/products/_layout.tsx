import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot} from "expo-router";

export default function ProductLayout() {
  return (
    <View style={styles.container}>
        <Slot />
      <Text style={styles.Text}>Discounted Prices</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Text:{
        backgroundColor:'orange',
        padding:20,
        width:"100%",
    },
})