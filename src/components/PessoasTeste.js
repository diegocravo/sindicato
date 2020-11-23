import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback, Button, TouchableOpacity, Alert, FlatList, Linking } from "react-native";
import { Icon } from 'native-base';
import Modal,  { ModalContent, BottomModal } from 'react-native-modals';

export default class pessoas extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='person' style={{ fontSize: 24, color: tintColor }} />
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
                                onPress={ () => this.setState({ visible: true }) }  // () => Linking.openURL(item.linkedin)   () => {Alert.alert('Informações', "{item.name.first}", [ {text: "ok"}] )}
                            >
                            <Image 
                                source={ {uri: item.picture.thumbnail} }
                                style={styles.avatar}
                            />
                            </TouchableOpacity>
                            <View style={styles.info}>
                                <Text style={styles.email}>{item.email}</Text>
                                <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                                <Text style={styles.name}>{item.status}</Text>
                            </View>
                            <BottomModal
                            visible={this.state.visible}
                            onTouchOutside={() => {
                            this.setState({ visible: false });
                            }}
                            >
                                <ModalContent>
                                <View>
                                    <Text>{item.name.first} {item.name.last}</Text>
                                    <Text>{item.status}</Text>
                                </View>
                                </ModalContent>
                            </BottomModal>
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
        marginLeft: 10,
        backgroundColor: '#fff',  
        justifyContent: 'center',
    },
    line: {
        height: 50,
        flexDirection: 'row',
        borderBottomColor: '#4934A3',
        borderBottomWidth: 1.5
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        alignSelf: 'center'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    name: {
        fontSize: 12
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
        marginLeft: -10
    },
    headerText: {
        textAlign: 'right',
        fontSize: 25,
    }

  });