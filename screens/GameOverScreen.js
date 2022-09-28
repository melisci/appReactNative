import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native"
import Card from "../components/Card";
import colors from "../constants/Colors";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    return (
        <View style={styles.screen}>
            <Image style={styles.image} source={require('../assets/gameover.png') } />
                <Card style={styles.resultContainer}>
                <Text style={styles.textResult}>Intentos: {roundsNumber}</Text>
                <Text>El numero era: {userNumber}</Text>
                </Card>
            <Button 
                title="Reiniciar"
                onPress={onRestart}
                color={colors.primary}
            />
                
                

        </View>
    )
}

const styles = StyleSheet.create ({ 
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems:"center"
    },
    resultContainer: {
        marginBottom:30
    },
    image:{
        width:"80%"
    }
})

export default GameOverScreen