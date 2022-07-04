import { StyleSheet, Text, View } from 'react-native';
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
      <StartGame />
    );
  }
  
}

const styles = StyleSheet.create({

});
