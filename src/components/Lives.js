import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
} from "react-native";
import { Icon } from "native-base";

class Lives extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="radio-button-on" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  loadLives = () => {
    fetch("https://json.extendsclass.com/bin/44ed36061a13")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.results || [],
        });
      });
  };

  componentDidMount() {
    this.loadLives();
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
            <Text style={styles.headerText}>Lives</Text>
          </View>
        </View>

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View>
              <View style={{ backgroundColor: "#eee", margin: 5 }}>
                <View style={styles.line}>
                  <View
                    style={{ width: "72%", marginBottom: -5, borderRadius: 2 }}
                  >
                    <Text style={styles.textMain}>{item.nomeSindicato}</Text>
                    <Text style={styles.text}>{item.descricao}</Text>
                    <Text style={styles.text}>Data: {item.data}</Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(item.link)}
                      style={styles.botao}
                    >
                      <Text style={styles.botaoText}>Acesse</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: 2,
                  borderBottomColor: "#4934A3",
                  borderBottomWidth: 1.5,
                }}
              ></View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default Lives;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 4,
  },
  textMain: {
    fontSize: 22,
    color: "#000",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 4,
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
    width: 100,
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
