import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import ChatBot from 'react-native-chatbot';
import { Icon } from 'native-base';

export default class Denuncias extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='chatboxes' style={{ fontSize: 24, color: tintColor }} />
        )
      }

    render() {
        return (
                <View style={ styles.container }>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.openDrawer()}}>
                            <Image source={require('../assets/menu.png')} style={styles.image} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.headerText}>Fale Conosco</Text>
                        </View>
                    </View>
                    <View>
                        <ChatBot 
                            style={ styles.chat } 
                            steps={steps} 
                            botAvatar='https://previews.123rf.com/images/sabelskaya/sabelskaya1610/sabelskaya161000126/64764058-pretty-african-girl-smiling-facial-expression-cartoon-vector-illustrations-isolated-on-white-backgro.jpg' 
                        />
                    </View>
                </View>
        )
    }
}

const steps = [
    {
        id: '1',
        message: 'Olá, eu sou a Cindy, a assitente virtual do Sindicato 4.0',
        trigger: '2'
    },
    {
        id: '2',
        message: 'O que posso fazer para te ajudar?',
        trigger: '3'
    },
    {
        id: '3',
        user: true,
        trigger: '4'
    },
    {
        id: '4',
        message: 'Entendi, eu posso te ajudar com isso!',
        end: true
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    text: {
        fontSize: 25
    },
    header: {
        height:30,
        marginTop: 25,
        backgroundColor: '#eee'
    },
    icon: {
        marginBottom: 0, 
        left: -170
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