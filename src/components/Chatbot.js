import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ChatBot from "react-native-chatbot";
import { Icon } from "native-base";

export default class Denuncias extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="chatboxes" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          >
            <Image
              source={require("../assets/menu.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Fale Conosco</Text>
          </View>
        </View>
        <View>
          <ChatBot
            style={styles.chat}
            steps={steps}
            botAvatar=""
          />
        </View>
      </View>
    );
  }
}

const steps = [
  {
    id: "1",
    message: "Olá, eu sou a Cindy, a assitente virtual do Sindicato 4.0",
    trigger: "2",
  },
  {
    id: "2",
    message: "O que posso fazer para te ajudar?",
    trigger: "3",
  },
  {
    id: "3",
    options: [
      { value: 1, label: "Pagamento da mensalidade", trigger: "4" },
      { value: 2, label: "Contato via email", trigger: "5" },
      { value: 3, label: "Filie-se", trigger: "6" },
      { value: 4, label: "Outros", trigger: "7" },
    ],
  },
  {
    id: "4",
    message: "Entendi, eu posso te ajudar com isso!",
    end: true,
  },
  {
    id: "5",
    message: "Email: exemplo@sindicato40.com.br, telefone: (81) 99999-9999",
    end: true,
  },
  {
    id: "6",
    message:
      "Para se Filiar ao Sindicato entre em contato conosco por email ou telefone",
    end: true,
  },
  {
    id: "7",
    message: "Me diga qual a sua dúvida.",
    trigger: "8",
  },
  {
    id: "8",
    user: true,
    trigger: "9",
  },
  {
    id: "9",
    message:
      "Vou encaminhar sua dúvida para um de nossos acessores e entraremos em contato com você o mais breve possível. Até mais!",
    end: true,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  text: {
    fontSize: 25,
  },
  header: {
    height: 30,
    marginTop: 25,
    backgroundColor: "#eee",
  },
  icon: {
    marginBottom: 0,
    left: -170,
  },
  image: {
    marginLeft: 10,
    width: 35,
    height: 35,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginLeft: -10,
  },
  headerText: {
    textAlign: "right",
    fontSize: 25,
  },
});
