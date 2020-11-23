import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, TouchableOpacity, TouchableWithoutFeedback, Share, Linking, ActivityIndicator, FlatList, Dimensions } from "react-native";
import { Icon } from 'native-base';
const {width, height} = Dimensions.get('window');

class Lives extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='radio-button-on' style={{ fontSize: 24, color: tintColor }} />
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
                        <Text style={styles.headerText}>Lives</Text>
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={{ width: '72%', backgroundColor:'#fff', marginBottom: -5, borderRadius: 2}}>
                        <Text style={styles.text}>Nome Sindicato</Text>
                        <Text style={styles.text}>Descrição Descrição Descr ição Desc rição Descrição Descrição Descrição Descrição Descrição </Text>
                        <Text style={styles.text}>Data: 27/08</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center',}}>
                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.botaoText}>Acesse</Text>
                        </TouchableOpacity>
                    </View>
                </View>  
                <View style={{marginTop:5, borderBottomColor: '#4934A3', borderBottomWidth: 1.5}}></View>
            </View>

          )
      }

}

export default Lives;

const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        marginBottom: 10,
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 20,
        color: '#000', 
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 4
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
    },
    line: {
        marginTop: 10,
        flexDirection: 'row',
    },
    botao: {
        width: 100,
        height: 42,
        marginBottom: 4,
        backgroundColor: '#4934A3',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    }

})