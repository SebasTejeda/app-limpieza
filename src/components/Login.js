import { useState } from "react"
import { Alert, Linking, Pressable, Text, TextInput, View } from "react-native"

const Login = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [emailCorrect, setEmailCorrect] = useState(false)
    const [passwordCorrect, setPasswordCorrect] = useState(false)

    return (
        <>
            <View>
                <Text>Usuario: </Text>
                <TextInput 
                    placeholder="Usuario" 
                    keyboardType='email-address' 
                    value={usuario} 
                    onChangeText={
                        text => {
                            setUsuario(text)
                            setEmailCorrect(text.includes('@') && text.endsWith('.com'))
                        }
                    }
                />
                {!emailCorrect && (<Text>Correo incorrecto</Text>)}
            </View>
            <View>
                <Text>Contraseña: </Text>
                <TextInput 
                    placeholder="Contraseña" 
                    secureTextEntry 
                    value={password} 
                    onChangeText={
                        text => {
                            setPassword(text)
                            setPasswordCorrect(text.length>=8)
                        }
                    }
                />
                {!passwordCorrect && (<Text>Contraseña incorrecta</Text>)}
            </View>
            <Pressable
                disabled={!emailCorrect && !passwordCorrect}
                onPress={()=>{Alert.alert('Éxito','Inicio de sesión exitoso')
                }}
                style={{
                    borderWidth: 1,
                    borderColor: emailCorrect && passwordCorrect ? 'blue' : 'gray',
                    
                }}
            >
                <Text style={{color: emailCorrect && passwordCorrect ? '#000':'#999'}}>
                    Iniciar sesión
                </Text>
            </Pressable>

            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                <Text>No tienes una cuenta? </Text>
                <Pressable onPress={() => Alert.alert('Registro', 'Redirigiendo a registro')}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                        Crea una nueva
                    </Text>
                </Pressable>
            </View>
        </>
    )
}

export default Login
