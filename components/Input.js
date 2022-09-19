import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input= props => (
    <TextInput style={{...styles.input, ...props.style}} 
    blurOnsubmit
    autoCapitalization="none"
    autoCorrect={false}
    keyboardType="numeric"
    maxLength={2}
    
    />
)

const styles = StyleSheet.create({
    input: {
        height:30,
        borderBottomColor:"grey",
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default Input