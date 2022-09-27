import React, {useState} from "react";
import {View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback, ScrollView, Dimensions} from "react-native"
import Card from "../components/Card";
import colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);

    const handlerInputNumber = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''));

    }
    const handlerResetInput = () => {
        setNumber ('')
        setConfirmed(false)
        setSelectedNumber(0);
        Keyboard.dismiss()
    }
    const onConfirm = () => {
        const chosenNumber = parseInt(number, 10);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setNumber('');
    }

    const onHandleStartGame = () => {
        onStartGame(selectedNumber);
    }

    const comfirmedOutput = () =>  confirmed && (
            <Card style={styles.summaryContainer}>
                <Text> Tu selección: </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="Empezar a jugar" 
                onPress={onHandleStartGame}/>
            </Card>
        )
    

    return (
        <TouchableWithoutFeedback onPress={() => { 
            Keyboard.dismiss()
        }}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.screen}>
            
                <Text style={styles.title}>Comenzar el juego</Text>
                    <Card style={styles.inputContainer}>
                        <Text>Elija un número</Text>
                        <Input style={styles.input}
                        onChangeText={(text) => handlerInputNumber(text)}
                        value={number}
                        blurOnsubmit
                        autoCapitalization="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}                
                        />
                        
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Limpiar" 
                                onPress={handlerResetInput} 
                                color={colors.accent}
                                />
                            </View>
                            <View style={styles.button}>
                                <Button title="Confirmar" 
                                onPress={onConfirm} 
                                color={colors.primary}
                                />
                            </View>
                            
                        </View>
                    </Card>
                {comfirmedOutput()}
            </View>
        </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 10, 
        alignItems: "center",
    },
    scrollView:{
        flex:1,
    },
    button:{
        width: Dimensions.get('window').width /4,
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
        width: 400,
        maxWidth: "90%",
        padding: 10,
        marginTop: Dimensions.get('window').height > 600 ? 20: 10,
        justifyContent: "space-between",
        paddingHorizontal: 1,
    },
    summaryContainer: {
        padding:25,
    }
})

export default StartGameScreen