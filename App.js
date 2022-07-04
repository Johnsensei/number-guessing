import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGame from './screens/StartGame';
import { 
  ArchivoBlack_400Regular 
} from '@expo-google-fonts/archivo-black';
import { useFonts } from 'expo-font';
  import AppLoading from "expo-app-loading";


export default function App() {
  let [fontsLoaded] = useFonts({
    ArchivoBlack_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading />
  } else {
    console.log(fontsLoaded);
    return (
      <View style={styles.rootScreen}>
        <StartGame />
        <StatusBar />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
    rootScreen: {
      backgroundColor: '#EFCFB6',
      flex: 1,
    }
});
