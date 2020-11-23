import React, { useState, useEffect, Component } from 'react';

import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AppLoading } from 'expo';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class Beneficios2 extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='gift' style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer()}}>
                        <Image source={require('../assets/menu.png')} style={styles.image} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerText}>Notícias</Text>
                    </View>
                </View>

                <Text>Vamos que vamos</Text>
            </View>
        )
    }
}

export default Beneficios2

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 10,
        flex: 1,
        backgroundColor: '#fff'
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