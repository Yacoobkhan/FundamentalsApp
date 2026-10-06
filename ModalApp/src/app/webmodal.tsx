import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut, SlideInDown } from 'react-native-reanimated';
import { Link } from 'expo-router';

export default function webmodal() {
  return (
    <Animated.View entering={FadeIn} style={styles.container}>
        <Link dismissTo href={"/"} asChild>
            <Pressable style={StyleSheet.absoluteFill}/>
        </Link>
        <Animated.View entering={SlideInDown} style={styles.box} >
                <Text style={{fontWeight:'bold',marginBottom:10}}>Modal Screen</Text>
                <Link dismissTo href='/'>
                    <Text>Go Back</Text>
                </Link>
        </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000040',
    },
    box:{
        width:'90%',
        height:'80%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
})