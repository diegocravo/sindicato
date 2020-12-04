import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import Modal from "react-native-modal";

function CustomDrawer({ ...props }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userArea}>
        <TouchableOpacity onPress={toggleModal}>
          <Image source={require("../assets/user.png")} style={styles.user} />
        </TouchableOpacity>
        <Text style={styles.nome}>Diego Cravo Teixeira</Text>
        <Text style={styles.email}>diego.cravo@souunit.com.br</Text>
      </View>

      <Modal
        isVisible={isModalVisible}
        style={{ backgroundColor: "white" }}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        swipeDirection="right"
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                textAlign: "center",
                marginBottom: 20,
                fontWeight: "bold",
                fontSize: 18,
                color: "#4934A3",
              }}
            >
              EDITAR INFORMAÇÕES PESSOAIS
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#4934A3",
                marginLeft: 30,
              }}
            >
              Nome
            </Text>
            <TextInput
              placeholder="Diego Cravo Teixeira"
              placeholderTextColor="#000"
              secureTextEntry={false}
              style={{
                justifyContent: "center",
                marginLeft: 30,
                marginRight: 30,
                textAlign: "center",
                marginBottom: 20,
                backgroundColor: "#eee",
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#4934A3",
                marginLeft: 30,
              }}
            >
              Data de Nascimento
            </Text>
            <TextInput
              placeholder="27 / 08 / 1989"
              placeholderTextColor="#000"
              secureTextEntry={false}
              style={{
                justifyContent: "center",
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 20,
                textAlign: "center",
                backgroundColor: "#eee",
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#4934A3",
                marginLeft: 30,
              }}
            >
              E-mail
            </Text>
            <TextInput
              placeholder="diego.cravo@souunit.com.br"
              placeholderTextColor="#000"
              secureTextEntry={true}
              style={{
                justifyContent: "center",
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 20,
                textAlign: "center",
                backgroundColor: "#eee",
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#4934A3",
                marginLeft: 30,
              }}
            >
              Currículo
            </Text>
            <TextInput
              placeholder="linkedin.com/in/diegocravo"
              placeholderTextColor="#000"
              secureTextEntry={true}
              style={{
                justifyContent: "center",
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 20,
                textAlign: "center",
                backgroundColor: "#eee",
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#4934A3",
                marginLeft: 30,
              }}
            >
              Senha
            </Text>
            <TextInput
              placeholder="*********"
              placeholderTextColor="#000"
              secureTextEntry={true}
              style={{
                justifyContent: "center",
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 20,
                textAlign: "center",
                backgroundColor: "#eee",
              }}
            />

            <TouchableOpacity
              style={{
                justifyContent: "center",
                marginBottom: 10,
                backgroundColor: "#4934A3",
                marginLeft: 30,
                marginRight: 30,
                fontWeight: "bold",
                fontSize: 14,
              }}
              onPress={() => this.closeModal()}
            >
              <Text
                style={{ color: "white", textAlign: "center", padding: 10 }}
              >
                SALVAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <DrawerNavigatorItems {...props} />
    </View>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userArea: {
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 10,
  },
  user: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  nome: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  email: {
    fontSize: 15,
    color: "#4934A3",
  },
});
