import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router";

export default function Product() {
  return (
    <View style={styles.container}>
      <Text >ProductList</Text>
      <Link href='/products/1'>Product 1</Link>
      <Link href='/products/2'>Product 2</Link>
      <Link href='/products/3'>Product 3</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20,
    },
})