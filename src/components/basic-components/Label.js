import { StyleSheet, Text } from "react-native"

const Label = ({label}) => (<Text style={styles.inputLabel}>{label}</Text>)

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 16,
        color: "#004d40",
        marginBottom: 5,
    },
})


export default Label
