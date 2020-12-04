import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  TextInput,
} from "react-native";
import { Icon } from "native-base";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";

class Trombone extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="megaphone" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  state = {
    isModalVisible: false,
    language: "Assédio Moral",
    Mensagem: "",
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  changeMessage = () => {
    this.setState({
      mensagem: "Olá",
    });
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
            <Text style={styles.headerText}>Reclamações</Text>
          </View>
        </View>

        <View>
          <View>
            <View
              style={{
                backgroundColor: "#fff",
                margin: 5,
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <View style={styles.line}>
                <View style={{ width: "72%", marginBottom: -5 }}>
                  <Text style={styles.textMain}>Horas Extras</Text>
                  <Text style={styles.text}>Status: Em Andamento</Text>
                  <Text style={styles.text}>Data: 12/12/2020</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("https://www.google.com")}
                    style={styles.botao}
                  >
                    <Text style={styles.botaoText}>Mais Detalhes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                backgroundColor: "#fff",
                margin: 5,
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <View style={styles.line}>
                <View
                  style={{ width: "72%", marginBottom: -5, borderRadius: 2 }}
                >
                  <Text style={styles.textMain}>Assédio Moral</Text>
                  <Text style={styles.text}>Status: Finalizado</Text>
                  <Text style={styles.text}>Data: 09/10/2020</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("https://www.google.com")}
                    style={styles.botao}
                  >
                    <Text style={styles.botaoText}>Mais Detalhes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ position: "absolute", bottom: 20, right: 20 }}>
          <TouchableOpacity onPress={() => this.toggleModal()}>
            <Image source={require("../assets/plus.png")} style={styles.user} />
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={this.state.isModalVisible}
          style={{ backgroundColor: "white" }}
          onBackdropPress={() => this.toggleModal()}
          onSwipeComplete={() => this.toggleModal()}
          swipeDirection="right"
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>Bote a Boca no Trombone</Text>
            </View>

            <View
              style={{
                backgroundColor: "#eee",
                borderRadius: 10,
                margin: 10,
                flexDirection: "row",
              }}
            >
              <Picker
                selectedValue={this.state.language}
                style={{
                  height: 50,
                  backgroundColor: "rgba(10, 10, 10, 0)",
                  borderRadius: 50,
                  width: "90%",
                }}
                dropdownIconColor={"#4934A3"}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }
              >
                <Picker.Item label="Assédio Moral" value="Assédio Moral" />
                <Picker.Item
                  label="Atraso Pagamentos"
                  value="Atraso Pagamentos"
                />
                <Picker.Item
                  label="Registro Carteira Trabalho"
                  value="Registro Carteira Trabalho"
                />
                <Picker.Item label="Horas Extras" value="Horas Extras" />
                <Picker.Item
                  label="Insalubridade / Periculosidade"
                  value="Insalubridade / Periculosidade"
                />
                <Picker.Item label="Salário" value="Salário" />
                <Picker.Item label="Outros" value="Outros" />
              </Picker>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/dropdown.png")}
                  style={styles.drop}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#eee",
                height: 300,
                borderRadius: 10,
                margin: 10,
              }}
            >
              <Text>{this.state.Mensagem}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#eee",
                borderRadius: 10,
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="Mensagem..."
                placeholderTextColor="#000"
                secureTextEntry={false}
                onSubmitEditing={() => this.changeMessage()}
                style={{
                  width: "78%",
                  textAlign: "left",
                  marginLeft: 5,
                  marginRight: 7,
                  backgroundColor: "#eee",
                  borderRadius: 10,
                  padding: 10,
                }}
              />
              <TouchableOpacity onPress={() => this.changeMessage}>
                <Image
                  source={require("../assets/send1.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{ flexDirection: "row", borderRadius: 10, marginTop: -10 }}
            >
              <View style={{ width: "55%" }}></View>

              <TouchableOpacity>
                <Image
                  source={require("../assets/camera.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require("../assets/clipe.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../assets/microfone.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                marginBottom: 10,
                backgroundColor: "#4934A3",
                marginLeft: 30,
                marginRight: 30,
                marginTop: 20,
                fontWeight: "bold",
                fontSize: 14,
              }}
              onPress={() => alert("Reclamação cadastrada com sucesso!")}
            >
              <Text
                style={{ color: "white", textAlign: "center", padding: 10 }}
              >
                ENVIAR
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Trombone;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
    flex: 1,
    backgroundColor: "#eee",
  },
  card: {
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 4,
  },
  textMain: {
    fontSize: 20,
    color: "#4934A3",
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#4934A3",
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
  line: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  botao: {
    height: 35,
    marginRight: 4,
    marginBottom: 4,
    backgroundColor: "#4934A3",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  gradient: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 2,
    alignItems: "center",
  },
  title: {
    color: "#4934A3",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  user: {
    width: 45,
    height: 45,
    borderRadius: 50,
    margin: 5,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 50,
    margin: 5,
  },
  drop: {
    width: 15,
    height: 15,
    borderRadius: 50,
    margin: 5,
  },
});
