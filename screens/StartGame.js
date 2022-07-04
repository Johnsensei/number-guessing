import { View, TextInput, StyleSheet, Button, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGame() {
    return(
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
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
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 2,
        color: '#000000',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',

    }
});