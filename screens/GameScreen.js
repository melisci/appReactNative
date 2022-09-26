import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, Button} from "react-native"
import {generateRandomNumberBetween} from "../utils/functions"
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
const GameScreen = ({ selectedNumber })  => {
    
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNumber));
    return (
        <View style={styles.screen}>
            <Text>La suposición del oponente</Text>
            <NumberContainer>{currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="MENOR" onPress={() => {}}/>
                <Button title="MAYOR" onPress={() => {}}/>

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
    buttonContainer:{
        flexDirection:"row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"

    }
})

export default GameScreen