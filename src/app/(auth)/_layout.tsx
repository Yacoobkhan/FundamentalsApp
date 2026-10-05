import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function Authlayout() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/icon.png')} style={styles.image}/>
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:100,
        width:100,
        margin:10,
    },
})