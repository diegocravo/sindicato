import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, TouchableOpacity, TouchableWithoutFeedback, Share, Linking, ActivityIndicator, FlatList, Dimensions, TextInput } from "react-native";
import { Icon } from 'native-base';
import Modal from 'react-native-modal';
const {width, height} = Dimensions.get('window');


class Trombone extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='megaphone' style={{ fontSize: 24, color: tintColor }} />
        )
    }

    state = {
        isModalVisible:false
    }

    toggleModal = () =>{
        this.setState({
            isModalVisible:!this.state.isModalVisible
        })
    }

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer()}}>
                        <Image source={require('../assets/menu.png')} style={styles.image} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerText}>Reclamações</Text>
                    </View>

                </View>

                <View>
                    <View>   
                        <View style={{backgroundColor:'#fff', margin: 5, marginTop: 10, borderRadius: 10}}> 
                            <View style={styles.line}>
                                <View style={{ width: '72%', marginBottom: -5}}>
                                    <Text style={styles.textMain}>Horas Extras</Text>
                                    <Text style={styles.text}>Status: Em Andamento</Text>
                                    <Text style={styles.text}>Data: 12/12/2020</Text>
                                </View>
                                <View style={{flex: 1, justifyContent: 'center', }}>
                                    <TouchableOpacity 
                                        onPress={ () => Linking.openURL("https://www.google.com") }
                                        style={styles.botao}
                                    >
                                        <Text style={styles.botaoText}>Mais Detalhes</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>  
                    </View>

                    <View>   
                        <View style={{backgroundColor:'#fff', margin: 5, marginTop: 10, borderRadius: 10}}> 
                            <View style={styles.line}>
                                <View style={{ width: '72%', marginBottom: -5, borderRadius: 2}}>
                                    <Text style={styles.textMain}>Assédio Moral</Text>
                                    <Text style={styles.text}>Status: Finalizado</Text>
                                    <Text style={styles.text}>Data: 09/10/2020</Text>
                                </View>
                                <View style={{flex: 1, justifyContent: 'center', }}>
                                    <TouchableOpacity 
                                        onPress={ () => Linking.openURL("https://www.google.com") }
                                        style={styles.botao}
                                    >
                                        <Text style={styles.botaoText}>Mais Detalhes</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>  
                    </View>
                </View>

                <View style={{position: 'absolute', bottom: 20, right: 20}}>
                    <TouchableOpacity
                        onPress={ () => this.toggleModal()}
                    >
                        <Image 
                            source={require('../assets/plus.png')} 
                            style={styles.user}
                        />
                    </TouchableOpacity>
                </View>

                <Modal 
                isVisible={this.state.isModalVisible}
                style={{backgroundColor:'white', }}
                onBackdropPress={()=>this.toggleModal()}
                onSwipeComplete={()=>this.toggleModal()} swipeDirection="right"
                animationIn="slideInUp" animationOut="slideOutDown"
                >
                    <View> 

                        <View style={{alignItems: 'center'}}> 
                            <Text style={styles.title}>
                                Bote a Boca no Trombone
                            </Text>
                        </View>

                        <View style={{backgroundColor: '#eee', height: 300, borderRadius: 10, margin: 10}}> 

                        </View>

                        <View style={{flexDirection: 'row', backgroundColor: '#eee', borderRadius: 10, margin: 10}}>
                            <TextInput 
                                placeholder="Mensagem..." 
                                secureTextEntry={false}
                                style={{width: '70%', textAlign: 'left',marginLeft: 5, marginRight: 7,  backgroundColor:'#eee', borderRadius: 10, padding: 10}}
                            />
                        </View>

                        <View style={{flexDirection: 'row', borderRadius: 10, marginTop: -10}}>

                            <View style={{width: '55%',}}></View>

                            <TouchableOpacity
                                onPress={ () => this.toggleModal()}
                            >
                                <Image 
                                    source={require('../assets/camera.png')} 
                                    style={styles.icon}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => this.toggleModal()}
                            >
                                <Image 
                                    source={require('../assets/clipe.png')} 
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ () => this.toggleModal()}
                            >
                                <Image 
                                    source={require('../assets/microfone.png')} 
                                    style={styles.icon}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View> 

                    <TouchableOpacity 
                    style={{marginBottom: 10,  backgroundColor:'#4934A3', marginLeft: 30,marginRight: 30, marginTop: 20, fontWeight: 'bold', fontSize: 14}} 
                    onPress={()=>this.closeModal()}
                    >
                        <Text style={{color:'white',textAlign:'center',padding:10}}>
                            ENVIAR
                        </Text>
                    </TouchableOpacity>

                    </View>
                </Modal>

            </View>

        )

    }

}

export default Trombone;

const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        marginBottom: 10,
        flex: 1,
        backgroundColor: '#eee'
    },
    card: {
        marginTop: 20
    },
    text: {
        fontSize: 16,
        color: '#000', 
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 4
    },
    textMain: {
        fontSize: 20,
        color: '#4934A3', 
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 4,
        borderBottomWidth: 0.5, 
        borderBottomColor: '#4934A3',
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
        marginBottom: 10,
        flexDirection: 'row'
    },
    botao: {
        height: 35,
        marginRight: 4,
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
    },
    gradient: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 2,
        alignItems: 'center'
    },
    title: {
      color: '#4934A3',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30
    },
    user: {
        width: 45,
        height: 45,
        borderRadius: 50,
        margin: 5
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 50,
        margin: 5
    }

})