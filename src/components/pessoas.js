import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback, Button, TouchableOpacity, Alert, FlatList, Linking } from "react-native";
import { Icon } from 'native-base';
import { Modalize } from 'react-native-modalize';

export default class pessoas extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='people' style={{ fontSize: 24, color: tintColor }} />
        )
      }

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    loadUsers = () => {
        //https://json.extendsclass.com/bin/9a215eaf3675     https://randomuser.me/api/?results=30
        fetch("https://json.extendsclass.com/bin/9a215eaf3675")
        .then( res => res.json())
        .then( res => {
            this.setState({
                data: res.results || []
            })
        })

    }

    componentDidMount() {
        this.loadUsers();
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer()}}>
                        <Image source={require('../assets/menu.png')} style={styles.image} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerText}>Pessoas</Text>
                    </View>
                </View>
                <FlatList 
                    data={this.state.data}
                    renderItem={({item}) =>(
                        <View style={styles.line}>
                            <TouchableOpacity 
                                onPress={ () => Linking.openURL(item.linkedin) }  // () => Linking.openURL(item.linkedin)   () => {Alert.alert('Informações', "{item.name.first}", [ {text: "ok"}] )}
                            >
                            <Image 
                                source={ {uri: item.picture.thumbnail} }
                                style={styles.avatar}
                            />
                            </TouchableOpacity>
                            <View style={styles.info}>
                                <Text style={styles.email}>{item.name.first} {item.name.last}</Text>
                                <Text style={styles.name}>{item.email}</Text>
                                <Text style={styles.name}>{item.status} - {item.location.city}</Text> 
                            </View>
                        </View>
                    )} 
                    keyExtractor={ item => item.email}
                />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#eee',  
        justifyContent: 'center',
    },
    line: {
        height: 60,
        flexDirection: 'row',
        borderBottomColor: '#4934A3',
        borderBottomWidth: 1.5
    },
    avatar: {
        marginTop: 4,
        marginLeft: 7,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
        alignSelf: 'center'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    name: {
        fontSize: 13
    },
    email: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    text: {
      color: '#000',
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
    },
    image: {
        width: 35,
        height: 35,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginLeft: 0
    },
    headerText: {
        textAlign: 'right',
        fontSize: 25,
    }

  });