import { View, Text, TextInput, Button, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton ({children}) {
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed
                    ? [styles.pressed, styles.buttonInnerContainer]
                    : styles.buttonInnerContainer}
                onPress={()=>''}
                android_ripple={{color: 'FF1544'}}
            >
                <Text style={styles.buttonText}>{children}</Text> 
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#EE1544',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,

    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});