import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";

export default function Login2({navigation}) {
    return (
        <View style={styles.container}>
            <Image 
                source={require("../../src/assets/logo.png")} 
                style={styles.logo} 
            />

            <TextInput 
                placeholder="Digite seu e-mail" 
                secureTextEntry={false}
                style={styles.input}
            />

            <TextInput 
                placeholder="Digite sua senha" 
                secureTextEntry={true}
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('Welcome2')}
            >
                <Text style={styles.botaoText} >
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('pessoas')}
            >
                <Text style={styles.botaoText} >
                    Pessoas
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('Login1')}
            >
                <Text style={styles.botaoText} >
                    Teste Login
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
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
        width: 110,
        height: 80,
        borderRadius: 5,
    },
    input: {
        marginTop: 10,
        textAlign: 'center',
        width: 300,
        padding: 10,
        backgroundColor: '#E0D4ED',
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