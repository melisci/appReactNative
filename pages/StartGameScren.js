import React, {useState} from "react";
import {View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback} from "react-native"
import Card from "../components/Card";
import colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber]= useState('')

    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g), '')

    }
    const handlerResetInput = () => {
        setEnteredValue ('')
        setConfirmed(false)
    }

    const handlerConfirmInput = () => {
        const choseNumber = parseInt (enteredValue)
        if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return
        setConfirmed(true)
        setSelectedNumber( parseInt (enteredValue))
        setEnteredValue('')
    }
    // const confirmedOutput = confirmed ? <Text>Número elegido {selectedNumber} </Text> : null
    let confirmedOutput
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text> Tu selección: </Text>
                <NumberContainer>{selectedNumber} </NumberContainer>
                <Button title="Empezar a jugar" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => { 
            Keyboard.dismiss()
        }}>
            
        
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
                    <Button title="Limpiar" 
                    onPress={handlerResetInput} 
                    color={colors.accent}/>
                    </View>
                    <View style={styles.button}>
                    <Button title="Confirmar" 
                    onPress={handlerConfirmInput} 
                    color={colors.primary}/>
                    </View>
                    
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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
    },
    summaryContainer: {
        padding:25,
    }
})

export default StartGameScreen