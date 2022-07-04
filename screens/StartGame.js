import { View, TextInput, StyleSheet, Button, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


export default function StartGame() {

    return(
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonSingleContainer}>
                    <PrimaryButton>Reset</PrimaryButton>   
                </View>
                <View style={styles.buttonSingleContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
        
    }
    
const styles = StyleSheet.create({
    inputContainer: {
        padding: 20,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#F3AC5A',
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 60,
        fontSize: 32,
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 2,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'ArchivoBlack_400Regular',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonSingleContainer: {
        flex: 1,
    }
});