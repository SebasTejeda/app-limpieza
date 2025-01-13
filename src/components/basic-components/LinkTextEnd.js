import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View, Text } from "react-native"

const LinkTextEnd = ({message, nav, linkMessage}) => {
    const navigation = useNavigation();
    return (
      <View style={styles.linkContainer}>
        <Text>{message}</Text>
        <Pressable
          onPress={() => {
            navigation.navigate(nav);
          }}
        >
          <Text style={styles.linkText}>{linkMessage}</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
        linkContainer: {
            marginTop: 20,
            alignItems: "center",
        },
        linkText: {
            color: "#00796b",
            fontWeight: "bold",
        },
    }
)

export default LinkTextEnd
