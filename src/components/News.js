import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Share,
  Linking,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from "react-native";
import { Icon } from "native-base";
const { width, height } = Dimensions.get("window");
import Modal from "react-native-modal";

class Noticias extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="paper" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  state = {
    news: [],
    loading: true,
    isModalVisible: true,
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  fetchNews = () => {
    fetch("")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          news: res.results,
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.fetchNews();
  }

  shareArticle = async (article) => {
    try {
      await Share.share({
        message: "Confira esta notícia" + article,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    } else {
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
              <Text style={styles.headerText}>Notícias</Text>
            </View>
          </View>
          <View style={styles.news}>
            <FlatList
              data={this.state.news}
              renderItem={({ item }) => {
                return (
                  <View style={styles.container}>
                    <TouchableWithoutFeedback
                      onPress={() => Linking.openURL(item.link)}
                      style={{ marginBottom: -30 }}
                    >
                      <View
                        style={{
                          width: width - 20,
                          height: 200,
                          backgroundColor: "#000",
                          marginBottom: -5,
                          borderRadius: 2,
                        }}
                      >
                        <Image
                          source={{ uri: item.img }}
                          style={[StyleSheet.absoluteFill, { borderRadius: 2 }]}
                        />
                        <View style={styles.gradient}>
                          <Text
                            style={{
                              position: "absolute",
                              bottom: 0,
                              color: "#fff",
                              fontSize: 20,
                              padding: 5,
                            }}
                          >
                            {item.titulo}
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              backgroundColor: "#4934A3",
                              color: "#fff",
                              padding: 5,
                              fontWeight: "bold",
                              position: "absolute",
                              top: 0,
                              right: 0,
                            }}
                            onPress={() => this.shareArticle(item.link)}
                          >
                            Compartilhe
                          </Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
            <View style={{height: 40}}></View>
          </View>
          <Modal
            isVisible={this.state.isModalVisible}
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
            onBackdropPress={() => this.toggleModal()}
            onSwipeComplete={() => this.toggleModal()}
            swipeDirection="right"
            animationIn="slideInUp"
            animationOut="slideOutDown"
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    marginBottom: 10,
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "#4934A3",
                  }}
                >
                  Bem vindo ao
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    marginBottom: 20,
                    fontWeight: "bold",
                    fontSize: 30,
                    color: "#4934A3",
                  }}
                >
                  Sindicato 4.0
                </Text>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => {
                    this.toggleModal();
                  }}
                >
                  <Text style={styles.botaoText}>COMEÇAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
}

export default Noticias;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  text: {
    fontSize: 20,
    color: "#000",
    alignSelf: "center",
  },
  container: {
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    backgroundColor: "#eee",
  },
  header: {
    padding: 20,
  },
  news: {
    alignSelf: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 2,
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
  botao: {
    width: 300,
    height: 42,
    marginTop: 100,
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
