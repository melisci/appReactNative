import React from "react";
import { useState, useRef, useEffect } from "react";
import {View, Text, StyleSheet, Button, Dimensions, Alert} from "react-native"
import {generateRandomNumberBetween} from "../utils/functions"
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import colors from "../constants/Colors";
const {height, width} = Dimensions.get('window');

const GameScreen = ({ selectedNumber, onGameOver })  => {
    
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNumber));
    const [rounds, setRounds] = useState (0)
    const currentLow = useRef (1)
    const currentHigh = useRef (100)

    useEffect(() => {
        if(currentGuess == selectedNumber) {
            onGameOver(rounds)
    }}, [currentGuess, selectedNumber, onGameOver])

    const onHandleNextGuess = direction => {
        if(
            (direction === 'lower' && currentGuess < selectedNumber) || 
            (direction === 'greater' && currentGuess > selectedNumber)
        ) {
            Alert.alert("No mientas", "No es verdad", [
                {text: "Disculpas", style:"cancel"}
            ])
            return
        }

        if(direction === "lower"){
            currentHigh.current = currentGuess
        }else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomNumberBetween (currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(current => current + 1)
    }
    
    
    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
            <Text>La suposición del oponente es:</Text>
            
            <NumberContainer >{currentGuess} </NumberContainer>
                <View style={styles.buttonContainer}>
                <Button title="MENOR" 
                onPress={onHandleNextGuess.bind(this, "lower")}
                color={colors.accent}
                />
                
                <Button title="MAYOR" onPress={onHandleNextGuess.bind(this, "greater")}
                color={colors.primary}/>
               
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create ({
    screen:{
        flex: 1,
        padding: 10,
        alignItems:"center"
    },
    container:{
        padding: 10,
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent: "space-around",
        marginTop: 20,
        width: width * 0.8,
        maxWidth: "70%"

    }
})

export default GameScreen