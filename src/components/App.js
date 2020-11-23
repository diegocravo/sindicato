import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Welcome from './Welcome';
import Login2 from './Login2';
import pessoas from './pessoas';
import Login from './Login';
import CustomDrawer from './CustomDrawer';
import Noticias from './News';
import Denuncias from './Chatbot';
import Beneficios from './Beneficicos';
import Beneficios2 from './Beneficios2';
import Assem from './Assembleias'
import pessoasTeste from './PessoasTeste'
import Lives from './Lives'

const Routes = createAppContainer(
  createDrawerNavigator({
    Home: Welcome,
    Login: Login,
    Pessoas: pessoas,
    Notícias: Noticias,
    FaleConosco: Denuncias,
    Benefícios: Beneficios2,
    Lives: Lives,
    Teste: pessoasTeste
  }, {
    initialRouteName: 'Home',
    drawerOpenRoute: 'DrawerOpen',
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: '#4934A3'
    }
  })
);

export default Routes;
