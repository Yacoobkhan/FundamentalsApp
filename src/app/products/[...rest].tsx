import {Text,View,StyleSheet} from "react-native";
import React from "react";
import {useLocalSearchParams} from "expo-router";

export default function CatchAllProductDetails(){
    const {rest} = useLocalSearchParams<{rest :  string[]}>();

    
    return(
        <View style={styles.container}>
            <Text>Catch all Product Details</Text>
            <Text>Details about Product at {rest.join("/")}</Text>
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