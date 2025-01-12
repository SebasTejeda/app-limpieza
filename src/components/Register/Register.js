import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const insets = useSafeAreaInsets();

  const validateEmail = (text) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(text);

  const validatePassword = (text) =>
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(text);

  const handleRegister = () => {
    Alert.alert("Éxito", "Registro exitoso. Ahora puedes iniciar sesión.");
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.header}>¡Vamos a empezar con tu registro!</Text>
      <View>
        <Text style={styles.stepText}>Paso 1:</Text>
        <Text style={styles.description}>Registra tu correo y contraseña</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu correo"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {!validateEmail(email) && email.length > 0 && (
          <Text style={styles.errorText}>Introduce un correo válido</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Introduce tu contraseña"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#004d40" />
          </Pressable>
        </View>
        {!validatePassword(password) && password.length > 0 && (
          <Text style={styles.errorText}>
            La contraseña debe incluir mayúsculas, números y caracteres especiales.
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirmar contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirma tu contraseña"
            secureTextEntry={!showPassword1}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Pressable onPress={() => setShowPassword1(!showPassword1)} style={styles.icon}>
            <Ionicons name={showPassword1 ? "eye-off" : "eye"} size={24} color="#004d40" />
          </Pressable>
        </View>
        {confirmPassword !== password && confirmPassword.length > 0 && (
          <Text style={styles.errorText}>Las contraseñas no coinciden</Text>
        )}
      </View>

      <Pressable
        disabled={!validateEmail(email) || !validatePassword(password) || confirmPassword !== password}
        onPress={handleRegister}
        style={[
          styles.registerButton,
          {
            backgroundColor:
              validateEmail(email) && validatePassword(password) && confirmPassword === password
                ? "#00796b"
                : "#bdbdbd",
          },
        ]}
      >
        <Text style={[
          styles.registerButtonText,
          {
            color:
              validateEmail(email) && validatePassword(password) && confirmPassword === password
                ? "#ffffff"
                : "#757575",
          },
        ]}>
          Continuar
        </Text>
      </Pressable>

      <View style={styles.footer}>
        <Text>¿Ya tienes cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Inicia sesión</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e0f7fa",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#006064",
  },
  stepText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#006064",
  },
  description: {
    fontSize: 15,
    marginBottom: 20,
    color: "#006064",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#004d40",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#004d40",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  errorText: {
    color: "#d32f2f",
    fontSize: 12,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#004d40",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  icon: {
    padding: 10,
  },
  registerButton: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  registerButtonText: {
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginText: {
    color: "#00796b",
    fontWeight: "bold",
  },
});

export default Register;
