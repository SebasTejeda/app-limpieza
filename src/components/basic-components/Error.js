import { StyleSheet, Text } from "react-native"

const Error = ({messageError}) => (<Text style={styles.errorText}>{messageError}</Text>)

const styles = StyleSheet.create({
    errorText: {
        color: "#d32f2f",
        fontSize: 12,
        marginTop: 5,
      },
})

export default Error
