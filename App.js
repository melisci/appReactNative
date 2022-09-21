
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './pages/StartGameScren';
import GameScreen from './pages/GameScreen';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] =useFonts ({
    OpenSans: require('./assets/fonts/static/OpenSans/OpenSans-Regular.ttf'),
    OpenSans: require('./assets/fonts/static/OpenSans/OpenSans-Bold.ttf'),

  } );
  // if (!loaded) return <AppLoading />

  const [userNumber, setUserNumber] = useState ()
  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }
  let content = <StartGameScreen onStartGame={handlerStartGame}/>
  if (userNumber){
    content = <GameScreen />
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
