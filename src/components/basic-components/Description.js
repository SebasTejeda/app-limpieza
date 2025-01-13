import { StyleSheet, Text } from "react-native"

const Description = ({description}) => (<Text style={styles.description}>{description}</Text>)

const styles = StyleSheet.create({
    description: {
        fontSize: 15,
        marginBottom: 20,
        color: "#006064",
    }
})

export default Description
