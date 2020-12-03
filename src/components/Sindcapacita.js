import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, TouchableOpacity, TouchableWithoutFeedback, Share, Linking, ActivityIndicator, FlatList, Dimensions } from "react-native";
import { Icon } from 'native-base';
import Modal from 'react-native-modal';
const {width, height} = Dimensions.get('window');

class Sindcapacita extends Component{

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='business' style={{ fontSize: 24, color: tintColor }} />
        )
      }

    state = {
    isModalVisible:false
    }

    openModal = () =>{
    this.setState({
        isModalVisible:true
    })
    }

    toggleModal = () =>{
        this.setState({
          isModalVisible:!this.state.isModalVisible
        })
      }
  
      closeModal = () =>{
        this.setState({
          isModalVisible:false
        })
      }

    render(){
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer()}}>
                        <Image source={require('../assets/menu.png')} style={styles.image} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerText}>SindCapacita</Text>
                    </View>
                </View>
                
                <View  style={{alignItems: 'center'}}> 
                    <View style={styles.card}>
                        <TouchableOpacity
                            onPress={ () => this.openModal()}
                        > 
                            <View style={{ width: width-20, height: 150, backgroundColor:'#000', marginBottom: -5, borderRadius: 5,}}>
                                <Image source={{uri: 'https://www.institutoae.com.br/wp-content/uploads/2017/05/Imagem_destacada_conteudo_BLOG_10-dicas-para-dar-um-UP-nos-estudos-598x300.png'}} style={[StyleSheet.absoluteFill, {borderRadius: 2}]} />
                                <View style={styles.gradient}>
                                    <Text style={{ position: 'absolute', bottom: 70, backgroundColor: 'rgba(73, 52, 163, 0.7)', color: '#fff', fontSize: 24, padding: 5 }}>Cursos Recomendados</Text>
                                    <Text style={{ position: 'absolute', bottom: 10, color: '#fff', fontSize: 15, padding: 5 }}>Cursos recomendados por nossa equipe técnica</Text>

                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity> 
                            <View style={{ width: width-20, height: 150, backgroundColor:'#000', marginBottom: -5, borderRadius: 5}}>
                                <Image source={{uri: 'data:image/jpeg;base64,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'}} style={[StyleSheet.absoluteFill, {borderRadius: 2}]} />
                                <View style={styles.gradient}>
                                    <Text style={{ position: 'absolute', bottom: 70, backgroundColor: 'rgba(73, 52, 163, 0.7)', color: '#fff', fontSize: 24, padding: 5 }}>Desenvolvimento Pessoal</Text>
                                    <Text style={{ position: 'absolute', bottom: 10, color: '#fff', fontSize: 15, padding: 5 }}>Cursos que visam melhorar a qualidade de vida</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity> 
                            <View style={{ width: width-20, height: 150, backgroundColor:'#000', marginBottom: -5, borderRadius: 5}}>
                                <Image source={{uri: 'https://www.cpp.org.br/media/k2/items/cache/e7fcaaeeb7f1b4e30b0e76a88fbe4d98_XL.jpg'}} style={[StyleSheet.absoluteFill, {borderRadius: 2}]} />
                                <View style={styles.gradient}>
                                    <Text style={{ position: 'absolute', bottom: 70, backgroundColor: 'rgba(73, 52, 163, 0.7)', color: '#fff', fontSize: 24, padding: 5 }}>Línguas</Text>
                                    <Text style={{ position: 'absolute', bottom: 10, color: '#fff', fontSize: 15, padding: 5 }}>Que tal aprender uma nova língua?</Text>

                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity> 
                            <View style={{ width: width-20, height: 150, backgroundColor:'#000', marginBottom: -5, borderRadius: 5}}>
                                <Image source={{uri: 'https://www.catho.com.br/educacao/blog/wp-content/uploads/sites/2/2018/10/2018-10-03-como-funciona-o-curso-de-administracao.png'}} style={[StyleSheet.absoluteFill, {borderRadius: 2}]} />
                                <View style={styles.gradient}>
                                    <Text style={{ position: 'absolute', bottom: 70, backgroundColor: 'rgba(73, 52, 163, 0.7)', color: '#fff', fontSize: 24, padding: 5, width: Dimensions.get('window').width - 20, textAlign: 'center'}}>Extensão</Text>
                                    <Text style={{ position: 'absolute', bottom: 10, color: '#fff', fontSize: 15, padding: 5 }}>Cursos de curta e média duração</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal 
                isVisible={this.state.isModalVisible}
                style={{backgroundColor:'white', }}
                onBackdropPress={()=>this.closeModal()}
                onSwipeComplete={()=>this.closeModal()} swipeDirection="right"
                animationIn="slideInUp" animationOut="slideOutDown"
                >
                    <View style={{ flex: 1, justifyContent:'center', padding: 10}}> 
                        <View style={{alignItems: 'center', justifyContent: 'center',}}> 
                            <Text style={styles.title}>
                            Cursos Recomendados
                            </Text>
                        </View>

                        <View>   
                            <View style={{backgroundColor:'#eee', margin: 5}}> 
                                <View style={styles.line}>
                                    <View style={{ width: '72%', marginBottom: -5, borderRadius: 2}}>
                                        <Text style={styles.textMain}>Pacote Office</Text>
                                        <Text style={styles.text}>Carga Horária: 8h</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center', }}>
                                        <TouchableOpacity 
                                            onPress={ () => Linking.openURL('https://www.globo.com') }
                                            style={styles.botao}
                                        >
                                            <Text style={styles.botaoText}>Inscreva-se</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.line}>
                                    <View style={{ width: '70%', marginBottom: -5, borderRadius: 2}}>
                                        <Text style={styles.textMain}>Finanças Pessoais</Text>
                                        <Text style={styles.text}>Carga Horária: 4h</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center', }}>
                                        <TouchableOpacity 
                                            onPress={ () => Linking.openURL('https://www.globo.com') }
                                            style={styles.botao}
                                        >
                                            <Text style={styles.botaoText}>Inscreva-se</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.line}>
                                    <View style={{ width: '70%', marginBottom: -5, borderRadius: 2}}>
                                        <Text style={styles.textMain}>Oratória</Text>
                                        <Text style={styles.text}>Carga Horária: 4h</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center', }}>
                                        <TouchableOpacity 
                                            onPress={ () => Linking.openURL('https://www.globo.com') }
                                            style={styles.botao}
                                        >
                                            <Text style={styles.botaoText}>Inscreva-se</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>  
                            
                        </View> 
                    </View>
                    <TouchableOpacity 
                    style={{justifyContent:'center', marginBottom: 10,  backgroundColor:'#4934A3', marginLeft: 30, marginRight: 30, fontWeight: 'bold', fontSize: 14}} 
                    onPress={()=>this.closeModal()}>
                        <Text style={{color:'white',textAlign:'center',padding:10}}>
                            VOLTAR
                        </Text>
                    </TouchableOpacity>
                </Modal>
            </View>

        )
    }

}

export default Sindcapacita;

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
        fontSize: 22,
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
    }

})