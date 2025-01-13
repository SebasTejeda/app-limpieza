import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";

const Back = ({nav}) => {
    const navigation = useNavigation()

    return (      
    <Pressable style={styles.backButton} onPress={() => navigation.navigate(nav)}>
        <Ionicons name="arrow-back" size={24} color="#00796b" />
    </Pressable>)
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 10,
        left: 10,
        padding: 10,
    }
})

export default Back
