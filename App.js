import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
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
        <ImageBackground
          source={require('./img/candyman.jpeg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <StartGame />
        </ImageBackground>
        <StatusBar />
      </LinearGradient>
    );
  }
  
}

const styles = StyleSheet.create({
    rootScreen: {
      // backgroundColor: '#EFCFB6',
      flex: 1,

    },
    backgroundImage: {
      opacity: 0.15,
      position: 'absolute',
      left: 0,
      top: 0,
      width: 500,
      height: 800,
    }
});
