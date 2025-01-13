import { StyleSheet, TextInput } from "react-native";

const InputEmail = ({value, setValue, placeholder, setValueCorrect}) => {

    const validateEmail = (text) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(text);
      };

    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => {
            setValue(text);
            setValueCorrect(validateEmail(text));
            }}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#004d40",
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#ffffff",
    },
})


export default InputEmail
