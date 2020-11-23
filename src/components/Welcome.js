import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

export default class Welcome extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  state = {
    slogan: "Aproximando Pessoas",
  };

  alternar = () => {
    this.setState({
      slogan: this.state.slogan ? "" : "Aproximando pessoas",
    });
  };
  render() {
    return (
      <View style={styles.tudo}>
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
            <Text style={styles.headerText}>Sindicato 4.0</Text>
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.botao} onPress={this.alternar}>
            <Text style={styles.txtbtn}>Mudar State</Text>
          </TouchableOpacity>

          <Text style={styles.text}>{this.state.slogan}</Text>
          <Text style={styles.text}>{this.props.titulo1}</Text>
          <Text style={styles.text}>{this.props.titulo2}</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#000",
    fontSize: 30,
  },
  botao: {
    width: 300,
    height: 42,
    marginTop: 10,
    backgroundColor: "#4934A3",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 35,
    height: 35,
    padding: 10,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginLeft: 5,
  },
  headerText: {
    textAlign: "right",
    fontSize: 25,
  },
  tudo: {
      flex: 1
  }
});
