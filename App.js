
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './pages/StartGameScren';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"Adivina el número"}/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
