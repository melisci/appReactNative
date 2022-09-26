import React from "react";
import { TextInput, StyleSheet } from "react-native";



const styles = StyleSheet.create({
    input: {
        height:30,
        borderBottomColor:"grey",
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

const Input = ({ style, ...props }) => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...style }} />
    )
}

export default Input;