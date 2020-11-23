import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { DrawerNavigatorItems} from 'react-navigation-drawer';

function CustomDrawer({...props}) {
    return(
        <View style={styles.container}>
            <View style={styles.userArea}>
                <Image 
                    source={require('../assets/user.png')} 
                    style={styles.user}
                />
                <Text style={styles.nome}>Diego Cravo Teixeira</Text>
                <Text style={styles.email}>Diego@123.com</Text>
            </View>

            <DrawerNavigatorItems {...props}/>
        </View>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userArea: {
        marginTop: 30,
        marginLeft: 10,
        marginBottom: 10,
    },
    user: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    nome: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    email: {
        fontSize: 15,
        color: '#4934A3'
    }
})