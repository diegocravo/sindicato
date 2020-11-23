import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { Icon } from 'native-base';

import Welcome from "./Welcome";

export default class LoginConta extends Component {

    static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
          <Icon name='log-in' style={{ fontSize: 24, color: tintColor }} />
      )
    }

    clicou = () => {
        //this.props.navigation
        Alert.alert('Sindicato 4.0', "Login Efetuado com sucesso")
    }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
            <TouchableOpacity onPress={() => { this.props.navigation.openDrawer()}}>
                <Image source={require('../assets/menu.png')} style={styles.image} />
            </TouchableOpacity>
            <View>
                <Text style={styles.headerText}>Login</Text>
            </View>
        </View>

        <View style={styles.container1}>

          <Image 
              source={require("../assets/logo.png")} 
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
              onPress={ () => {this.clicou()}}
          >
              <Text style={styles.botaoText}>
                  ENTRAR
              </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 30,
      marginLeft: 10,
      flex: 1,
      backgroundColor: '#fff'
  },
  image: {
      width: 35,
      height: 35,
      padding: 10
  },
  header: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      marginLeft: -10
  },
  headerText: {
      textAlign: 'right',
      fontSize: 25,
  },
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
})
