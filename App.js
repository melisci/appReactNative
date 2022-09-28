
import { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScren';
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font';
import GameOverScreen from './screens/GameOverScreen';
// import AppLoading from 'expo-app-loading';

export default function App() {
  
  const [loaded] =useFonts ({
    OpenSans: require('./assets/fonts/static/OpenSans/OpenSans-Regular.ttf'),
    OpenSans: require('./assets/fonts/static/OpenSans/OpenSans-Bold.ttf'),

  } );
  // if (!loaded) return <AppLoading />
  /* if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  } */

  const [userNumber, setUserNumber] = useState(0);
  const [rounds, setRounds] = useState(0);
  const  title = !userNumber ? 'Adivina un numero' : 'Comienza el juego';

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0)
  }

  let content = <StartGameScreen onStartGame={onStartGame} />
  
  if(userNumber && rounds <= 0) {
    content = <GameScreen selectedNumber={userNumber} onGameOver={onGameOver} />
  } else if(rounds > 0) {
    content = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onRestart={onRestartGame} />
  }


  const onGameOver = (roundsNumber) => {
    setRounds(roundsNumber);
  }

  const onRestartGame = () => {
    setUserNumber(0);
    setRounds(0);
  }

  

  return (
    <View style={styles.container}>
      <Header title={"Adivina el número"}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold'
  }
});
