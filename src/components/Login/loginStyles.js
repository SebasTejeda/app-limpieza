import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase',
        fontSize: 30,
        width: '90%',
        textAlign: 'left',
        marginBottom: 40
    },
    data: {
        textAlign: 'left',
        width: '90%',
        marginLeft: 20,
        marginRight: 20     
    },
    input: {
        borderBottomWidth: 1,
        paddingVertical: 5,
        fontSize: 15,
        textAlignVertical: 'center',
        marginTop: 5,
        marginBottom: 5,
        width: '90%',
        color: 'black', // Asegúrate de que el texto se vea bien en el campo
    },
    inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%',
    },
    icon: {
        marginLeft: 10,
    },
    link:{ 
        color: "blue", 
        textDecorationLine: "underline" 
    },
    error: {
        width: '90%',
        textAlign: 'left',
        marginBottom: 10,
        color: 'red'
    },
    loginButton: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 50,
        borderRadius: 5, // Para bordes redondeados
    },
    loginButtonText: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 5,
    }
});

export default styles;
