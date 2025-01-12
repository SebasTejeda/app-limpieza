import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const insets = useSafeAreaInsets(); // Se obtiene el valor de insets

  const validateEmail = (text) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(text);
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>
        Ingresa tus credenciales para iniciar sesión
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="ejemplo@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailCorrect(validateEmail(text));
          }}
        />
        {!emailCorrect && email.length > 0 && (
          <Text style={styles.errorText}>Correo electrónico no válido</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Contraseña</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="••••••••"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordCorrect(text.length >= 8);
            }}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#004d40" />
          </Pressable>
        </View>
        {!passwordCorrect && password.length > 0 && (
          <Text style={styles.errorText}>
            La contraseña debe tener al menos 8 caracteres
          </Text>
        )}
      </View>

      <Pressable
        disabled={!emailCorrect || !passwordCorrect}
        onPress={() => {
          Alert.alert("Inicio de sesión", "Inicio de sesión exitoso");
        }}
        style={[
          styles.button,
          { backgroundColor: emailCorrect && passwordCorrect ? "#00796b" : "#bdbdbd" },
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            { color: emailCorrect && passwordCorrect ? "#ffffff" : "#757575" },
          ]}
        >
          Iniciar sesión
        </Text>
      </Pressable>

      <View style={styles.linkContainer}>
        <Text>¿No tienes una cuenta?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.linkText}>Regístrate aquí</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e0f7fa",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#006064",
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 20,
    color: "#006064",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  inputLabel: {
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
  passwordInputContainer: {
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
  eyeIcon: {
    padding: 10,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  linkContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#00796b",
    fontWeight: "bold",
  },
};

export default Login;
