import React, { useState } from "react";
import {Alert, Text, View, Pressable, StyleSheet} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Error from "./basic-components/Error";
import InputEmail from "./basic-components/InputEmail";
import InputPassword from "./basic-components/InputPassword";
import LinkTextEnd from "./basic-components/LinkTextEnd";
import Label from "./basic-components/Label";
import Title from "./basic-components/Title";
import Description from "./basic-components/Description";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false); 
  const [confirmPasswordCorrect, setConfirmPasswordCorrect] = useState(false);

  const insets = useSafeAreaInsets();

  const handleRegister = () => {
    Alert.alert("Éxito", "Registro exitoso. Ahora puedes iniciar sesión.");
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <Title title='¡Vamos a empezar con tu registro!'></Title>
      <View>
        <Text style={styles.stepText}>Paso 1:</Text>
        <Description description='Registra tu correo y contraseña'></Description>
      </View>

      <View style={styles.inputContainer}>
      <Label label='Correo Electrónico'></Label>
        <InputEmail placeholder={'Introduce tu correo'} value={email} setValue={setEmail} setValueCorrect={setEmailCorrect}/>
        {!emailCorrect && email.length > 0 && (
          <Error messageError='Introduce un correo válido'></Error>
        )}
      </View>

      <View style={styles.inputContainer}>
      <Label label='Contraseña'></Label>
        <InputPassword value={password} setValue={setPassword} setValueCorrect={setPasswordCorrect} placeholder="Introduce tu contraseña"/>
        {!passwordCorrect && password.length > 0 && (
          <Error messageError='La contraseña debe incluir mayúsculas, números y caracteres especiales.'/>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Label label='Confirmar Contraseña'></Label>
        <InputPassword value={confirmPassword} setValue={setConfirmPassword} setValueCorrect={setConfirmPasswordCorrect} placeholder="Confirma tu contraseña"/>
        {confirmPassword !== password && !confirmPasswordCorrect && confirmPassword.length > 0 && (
          <Error messageError='Las contraseñas no coinciden'/>
        )}
      </View>

      <Pressable
        disabled={!emailCorrect || !passwordCorrect || !confirmPasswordCorrect || confirmPassword !== password}
        onPress={handleRegister}
        style={[
          styles.registerButton,
          {
            backgroundColor:
              emailCorrect && passwordCorrect && confirmPasswordCorrect && confirmPassword === password
                ? "#00796b"
                : "#bdbdbd",
          },
        ]}
      >
        <Text style={[
          styles.registerButtonText,
          {
            color:
            emailCorrect && passwordCorrect && confirmPasswordCorrect && confirmPassword === password
                ? "#ffffff"
                : "#757575",
          },
        ]}>
          Continuar
        </Text>
      </Pressable>

      <LinkTextEnd message='¿Ya tienes una cuenta' nav='Login' linkMessage='Inicia sesión'></LinkTextEnd>
    </View>
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
  stepText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
  registerButton: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  registerButtonText: {
    fontWeight: "bold",
  },
});

export default Register;
