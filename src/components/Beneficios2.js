import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  FlatList,
} from "react-native";
import { Icon } from "native-base";

class Beneficios2 extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="gift" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  loadBenefits = () => {
    fetch("https://json.extendsclass.com/bin/c12dde71e0ff")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.results || [],
        });
      });
  };

  componentDidMount() {
    this.loadBenefits();
  }

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
            <Text style={styles.headerText}>Benefícios</Text>
          </View>
        </View>

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1.5,
                backgroundColor: "#fff",
                borderColor: "#4934A3",
                marginTop: 10,
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    margin: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.img }}
                    style={{ width: 85, height: 80 }}
                  />
                </View>
                <View style={{ width: "100%", marginBottom: 6 }}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      {item.titulo}
                    </Text>
                    <Text style={{ fontSize: 18, width: "70%" }}>
                      {item.descricao}
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                      Data de Expiração: {item.data}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(item.link)}
                  style={styles.botao}
                >
                  <Text style={styles.botaoText}>Ver Oferta</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default Beneficios2;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#ddd",
  },
  header: {
    height: 30,
    marginTop: 25,
    backgroundColor: "#fff",
  },
  icon: {
    marginBottom: 0,
    left: -170,
  },
  image: {
    width: 35,
    height: 35,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginLeft: 0,
  },
  headerText: {
    textAlign: "right",
    fontSize: 25,
  },
  line: {
    height: "auto",
    borderBottomColor: "#4934A3",
    borderBottomWidth: 1.5,
  },
  botao: {
    width: 300,
    height: 42,
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
});
