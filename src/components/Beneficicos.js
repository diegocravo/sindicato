import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import {
  useFonts,
  IBMPlexMono_600SemiBold
} from '@expo-google-fonts/ibm-plex-mono';

export default function Beneficios() {
  let [fontsLoaded] = useFonts({
    IBMPlexMono_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View >

        <Header>
            <Left>
                <Icon 
                    name='menu' onPress={ () => 
                        this.props.navigation.openDrawer()
                    }
                />
            </Left>
        </Header>

        <Text>
          Beneficios
        </Text>

      </View>
    );
  }
};