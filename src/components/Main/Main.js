import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Boton from "../Boton/Boton";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Quién desea usar la aplicación?</Text>
      <View style={styles.buttons}>
        <Boton text="Cliente" dir="Login" />
        <Boton text="Socio" dir="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5", // Fondo claro y moderno
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333", // Color texto oscuro para buen contraste
  },
  buttons: {
    width: "100%",
    alignItems: "center",
    gap: 15, // Espaciado entre botones
  },
});

export default Main;
