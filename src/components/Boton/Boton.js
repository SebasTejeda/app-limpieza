import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Boton = ({ text, dir, icon }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.boton,
        pressed ? styles.botonPresionado : null,
      ]}
      onPress={() => navigation.navigate(dir)}
    >
      {icon && <Ionicons name={icon} size={20} color="#FFFFFF" style={styles.icon} />}
      <Text style={styles.texto}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    boton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      backgroundColor: "#009688", // Color más vibrante
      marginTop: 20,
      borderRadius: 15,
      paddingVertical: 15,
      alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5, // Incremento de la elevación para un efecto más destacado
    },
    botonPresionado: {
      backgroundColor: "#00796B", // Un tono más oscuro para el efecto de presión
    },
    texto: {
      textAlign: "center",
      textTransform: "capitalize",
      fontSize: 18,
      fontWeight: "700", // Más peso para mayor nitidez
      color: "#FFFFFF",
      marginLeft: 10, // Espacio entre el ícono y el texto
    },
    icon: {
      marginRight: 10,
    },
  });

export default Boton
  