import React from "react";
import {View, Text, StyleSheet} from "react-native"

const GameScreen = props => {
    const [currentGuess, setCurrentGues] = useState(generateRandomBetween(1, 100, props.userOption))
    const generateRandomBetween = (min, max, exclude) =>{
        min = Math.ceil(min)
        max = Math.floor(max)
        const rndNum = Math.floor(Math.random() * (max -min) + min)
        if (rndNum === exclude){
            return generateRandomBetween(min, max, exclude)
        } else {
            return rndNum
        }
    }
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