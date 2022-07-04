import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
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
    return (
      <LinearGradient
        style={styles.rootScreen}
        colors={['#EFCFB6', '#FBF6E7']}
      >
        <StartGame />
        <StatusBar />
      </LinearGradient>
    );
  }
  
}

const styles = StyleSheet.create({
    rootScreen: {
      // backgroundColor: '#EFCFB6',
      flex: 1,

    }
});
