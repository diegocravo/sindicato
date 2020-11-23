import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Welcome2 from './Welcome2';
import Login2 from './Login2';
import pessoas from './pessoas';
import Login from './Login';
import Login2 from './Login2';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen headerMode={false} name="Login" component={Login2} options={{ title: 'Pessoas' }} />
        <Stack.Screen headerMode={false} name="Teste" component={Login} options={{ title: 'Sindicato 4.0' }} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}
