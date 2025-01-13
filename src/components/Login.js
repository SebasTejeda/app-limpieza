import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Error from "./basic-components/Error";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputEmail from "./basic-components/InputEmail";
import Label from "./basic-components/Label";
import InputPassword from "./basic-components/InputPassword";
import LinkTextEnd from "./basic-components/LinkTextEnd";
import Title from "./basic-components/Title";
import Description from "./basic-components/Description";
import Back from "./basic-components/Back";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  const insets = useSafeAreaInsets();

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
      <Back nav='Main'/>
      <Title title='¡Bienvenido!'/>
      <Description description='Ingresa tus credenciales para iniciar sesión'/>

      <View style={styles.inputContainer}>
        <Label label='Correo electrónico'/>
        <InputEmail placeholder="ejemplo@email.com" value={email} setValue={setEmail} setValueCorrect={setEmailCorrect}/>
        {!emailCorrect && email.length > 0 && (
          <Error messageError='Correo electrónico no válido'></Error>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Label label='Contraseña'></Label>
        <InputPassword value={password} setValue={setPassword} setValueCorrect={setPasswordCorrect}/>
        {!passwordCorrect && password.length > 0 && (
          <Error messageError='La contraseña debe tener al menos 8 caracteres'/>
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

      <LinkTextEnd message='¿No tienes una cuenta?' nav='Register' linkMessage='Regístrate aquí'/>
    </View>
  );
};

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e0f7fa",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
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
};

export default Login;
