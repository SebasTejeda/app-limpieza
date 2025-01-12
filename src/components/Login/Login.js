import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./loginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (text) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(text);
  };

  return (
    <>
      <Text style={styles.title}>login</Text>
      <View style={styles.data}>
        <Text>Email: </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailCorrect(validateEmail(text));
          }}
        />
        {!emailCorrect && email.length > 0 && <Text style={styles.error}>Correo incorrecto</Text>}
      </View>
      
      <View style={styles.data}>
        <Text>Contraseña: </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordCorrect(text.length >= 8);
            }}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </Pressable>
        </View>
        {!passwordCorrect && password.length > 0 && <Text style={styles.error}>Contraseña incorrecta</Text>}
      </View>
      
      <Pressable
        disabled={!emailCorrect || !passwordCorrect}
        onPress={() => {
          Alert.alert("Éxito", "Inicio de sesión exitoso");
        }}
        style={[styles.loginButton, { borderColor: emailCorrect && passwordCorrect ? "blue" : "gray" }]}
      >
        <Text style={[styles.loginButtonText, { color: emailCorrect && passwordCorrect ? "#000" : "#999" }]}>
          Iniciar sesión
        </Text>
      </Pressable>

      <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center" }}>
        <Text>No tienes una cuenta? </Text>
        <Pressable onPress={() => Alert.alert("Registro", "Redirigiendo a registro")}>
          <Text style={styles.link}>Crea una nueva</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Login;
