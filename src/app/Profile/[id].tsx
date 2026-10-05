import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function CustomProfileNotFound() {
    const {id} = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Profile {id} Not Found </Text>
      <Link href='/Profile'>Profile</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})