import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#111',
      fontSize: 30,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    input: {
        marginTop: 10,
        textAlign: 'center',
        width: 300,
        padding: 10,
        backgroundColor: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 5
    },
    botao: {
        width: 300,
        height: 42,
        marginTop: 10,
        backgroundColor: '#4934A3',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }

  });

  export default styles;