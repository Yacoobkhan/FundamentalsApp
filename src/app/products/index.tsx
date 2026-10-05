import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router";

export default function Product() {
  return (
    <View style={styles.container}>
      <Text >ProductList</Text>
      <Link href='./1' relativeToDirectory>Product 1</Link>
      <Link href='/products/2'>Product 2</Link>
      <Link href='/products/3'>Product 3</Link>

      <Link href='/login'>Login</Link>

      <Link href='/products/best-sellers/playstation-5'>PlayStation 5 (Best Sellers)</Link>
      <Link href='/products/deals/black-friday/playstation-5'>PlayStation 5 (Deals)</Link>
      <Link href='/products/search/playstation-5'>PlayStation 5 (Search)</Link>


        <Link href='/products/best-sellers/playstation' asChild>
        <Pressable style={styles.button}> 
          <Text style={styles.buttonText}>
            PlayStation
          </Text>
          </Pressable>
          </Link>

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
    button:{
      backgroundColor:'#0ea5e9',
      padding:12,
      borderRadius:6,
    },
    buttonText:{
      color:'white',
      fontSize:16,
    }
})