import { StyleSheet, Text } from "react-native"

const Title = ({title}) => (<Text style={styles.title}>{title}</Text>)

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#006064",
    }
})


export default Title
