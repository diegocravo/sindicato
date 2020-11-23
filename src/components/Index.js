import React, { Component } from 'react';
import { createAppContainer, createStackNavigation } from 'react-navigation';

import Login from './Login';

const MainNav = createStackNavigation (
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }
        }
    }
)

export default createAppContainer(MainNav);