import React, { Component } from "react";
import { Text, Button, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, Dimensions } from "react-native";
import { Icon } from 'native-base';
import Modal from 'react-native-modal';

//import styles from "../styles/login_styles";
import Welcome from "./Welcome";

export default class Login extends Component {

    static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
          <Icon name='log-in' style={{ fontSize: 24, color: tintColor }} />
      )
    }

    clicou = () => {
        Alert.alert('Sindicato 4.0', "Login Efetuado com sucesso")
    }

    state = {
      isModalVisible:false
    }

    openModal = () =>{
      this.setState({
        isModalVisible:true
      })
    }

    toggleModal = () =>{
      this.setState({
        isModalVisible:!this.state.isModalVisible
      })
    }

    closeModal = () =>{
      this.setState({
        isModalVisible:false
      })
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

          <Text style={styles.title}>
            Sindicato 4.0
          </Text>

          <View>
            <TouchableOpacity 
                style={styles.botao}
                //onPress={ () => {this.setState({ visible: true })} }
                onPress={ () => this.openModal() }
            >
                <Text style={styles.botaoText}>
                    QUERO LOGAR COM E-MAIL OU CPF
                </Text>
            </TouchableOpacity>

            <Modal 
              isVisible={this.state.isModalVisible}
              style={{backgroundColor:'white', }}
              onBackdropPress={()=>this.closeModal()}
              onSwipeComplete={()=>this.closeModal()} swipeDirection="right"
              animationIn="slideInUp" animationOut="slideOutDown"
            >
              <View style={{ flex: 1, justifyContent:'center', }}>
                <Text style={{textAlign:'center', marginBottom: 20, fontWeight: 'bold', fontSize: 18, color: '#4934A3'}}>
                  FAZER LOGIN
                </Text>

                <TextInput 
                    placeholder="Digite seu e-mail" 
                    secureTextEntry={false}
                    style={{justifyContent: 'center', marginLeft: 30, marginRight: 30, textAlign: 'center', marginBottom: 20, backgroundColor:'#eee'}}
                />

                <TextInput 
                    placeholder="Digite sua senha" 
                    secureTextEntry={true}
                    style={{justifyContent: 'center', marginLeft: 30, marginRight: 30, marginBottom: 20, textAlign: 'center', backgroundColor:'#eee'}}
                />

                <TouchableOpacity 
                  style={{justifyContent:'center', marginBottom: 10,  backgroundColor:'#4934A3', marginLeft: 30, marginRight: 30, fontWeight: 'bold', fontSize: 14}} 
                  onPress={()=>this.closeModal()}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>
                    ENTRAR
                  </Text>
                </TouchableOpacity>

                <Text style={{textAlign:'center', marginBottom: 20, fontSize: 12, color: '#4934A3'}}>
                  ESQUECI MINHA SENHA
                </Text>

              </View> 
            </Modal>

          </View>

          <TouchableOpacity 
              style={styles.botao}
              onPress={ () => {this.clicou()}}
          >
              <Text style={styles.botaoText}>
                  QUERO LOGAR COM O GOOGLE
              </Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={styles.botao}
              onPress={ () => {this.clicou()}}
          >
              <Text style={styles.botaoText}>
                  QUERO LOGAR COM O FACEBOOK
              </Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={styles.botaoCriar}
              onPress={ () => {this.clicou()}}
          >
              <Text style={styles.botaoTextCriar}>
                  QUERO CRIAR UMA CONTA
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
      backgroundColor: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 5
  },
  botao: {
      width: 300,
      height: 42,
      marginTop: 10,
      backgroundColor: '#4934A3',
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center'
  },
  botaoText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white'
  },
  botaoCriar: {
    width: 300,
    height: 42,
    marginTop: 10,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#4934A3',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoTextCriar: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4934A3'
  },
  title: {
    color: '#4934A3',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30
  }
})
