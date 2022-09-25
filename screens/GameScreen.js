import React from "react";
import {View, Text, StyleSheet} from "react-native"
import {generateRandomNumberBetween} from "../utils/functions"
const GameScreen = ({ selectedNumber })  => {
    
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNumber));
    render (
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