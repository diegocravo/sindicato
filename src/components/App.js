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
import Sindcapacita from './Sindcapacita'

const Routes = createAppContainer(
  createDrawerNavigator({
    Notícias: Noticias,
    Home: Welcome,
    Pessoas: pessoas,
    Sindcapacita: Sindcapacita,
    FaleConosco: Denuncias,
    Benefícios: Beneficios2,
    Lives: Lives,
    Login: Login,
    Teste: pessoasTeste
  }, {
    initialRouteName: 'Notícias',
    drawerOpenRoute: 'DrawerOpen',
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: '#4934A3'
    }
  })
);

export default Routes;
