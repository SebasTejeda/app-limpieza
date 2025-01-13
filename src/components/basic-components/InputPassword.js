import { useState } from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const InputPassword = ({value, setValue, setValueCorrect, placeholder="••••••••"}) => {

      const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.passwordInputContainer}>
            <TextInput
                style={styles.passwordInput}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                value={value}
                onChangeText={(text) => {
                    setValue(text);
                    setValueCorrect(text.length >= 8);
                }}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#004d40" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    passwordInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#004d40",
        borderRadius: 8,
        backgroundColor: "#ffffff",
    },
    passwordInput: {
        flex: 1,
        padding: 10,
    },
    eyeIcon: {
        padding: 10,
    },
})


export default InputPassword
