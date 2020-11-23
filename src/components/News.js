import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, Share, Linking, ActivityIndicator, FlatList, Dimensions } from "react-native";
import { Icon } from 'native-base';
const {width, height} = Dimensions.get('window');
//console.disableYellowBox = true;

class Noticias extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='notifications' style={{ fontSize: 24, color: tintColor }} />
        )
      }

    state = {
        news: [],
        loading: true
    }
    

    fetchNews = () => {

        // aqui colocar o JSON Correto
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=54bf0e648505478f9e61715886e424f6")
        .then( res => res.json())
        .then( res => {
            this.setState({
                news: res.articles, loading : false 
            })
        })
    }

    componentDidMount(){
        this.fetchNews()
    }

    shareArticle = async article => {
        try {
            await Share.share({
                message: 'Confira esta notícia' + article
            })
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        if (this.state.loading){
            return(
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#000"/>
                </View>
            )
        }
        else {
            return(
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.openDrawer()}}>
                            <Image source={require('../assets/menu.png')} style={styles.image} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.headerText}>Notícias</Text>
                        </View>
                    </View>
                    <View style={styles.news}>
                        <FlatList 
                            data={this.state.news}
                            renderItem={({item}) => {
                                return(
                                    <View style={styles.container}>
                                        <TouchableWithoutFeedback onPress={ () => Linking.openURL(item.url) } style={{marginBottom:-30}}>
                                            <View style={{ width: width-50, height: 200, backgroundColor:'#000', marginBottom: -5, borderRadius: 2}}>
                                            <Image source={{uri: item.urlToImage}} style={[StyleSheet.absoluteFill, {borderRadius: 2}]} />
                                            <View style={styles.gradient}>
                                                <Text style={{ position: 'absolute', bottom: 0, color: '#fff', fontSize: 20, padding: 5 }}>{item.title}</Text>
                                            </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        <View>
                                            <Text style={{fontSize: 18, color: '#4934A3', padding:2, fontWeight: 'bold', position: 'absolute', top:0, right:0}}
                                                        onPress={() => this.shareArticle(item.url)}
                                                >Compartilhe</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            )
        }
    }
}

export default Noticias;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 20,
        color: '#000', 
        alignSelf: 'center',
    },
    container: {
        marginTop: 30,
        marginBottom: 10,
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        padding: 20,
    },
    news: {
        alignSelf: 'center'
    },
    gradient: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 2
    },
    image: {
        marginLeft: 10,
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
    }
})