import React, {useState} from "react";
import {View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback} from "react-native"
import Card from "../components/Card";
import colors from "../constants/Colors";
import Input from "../components/Input";

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('')
    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g), '')

    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Comenzar el juego</Text>
            <Card style={styles.inputContainer}>
                <Text>Elija un número</Text>
                <Input style={styles.input}
                onChangeText={handlerInputNumber}
                value={enteredValue}                
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title="Limpiar" onPress={() =>{}} color={colors.accent}/>
                    </View>
                    <View style={styles.button}>
                    <Button title="Confirmar" onPress={() =>{}} color={colors.primary}/>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 10, 
        alignItems: "center",
    },
    button:{
        width:100,
    },
    title: {
        fontSize:20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        padding: 20,
        alignItems: "center",
        
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    }
})

export default StartGameScreen