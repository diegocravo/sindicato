import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

console.disableYellowBox = true;

import pessoas from "./pessoas";
import Login from "./Login";
import CustomDrawer from "./CustomDrawer";
import Noticias from "./News";
import Denuncias from "./Chatbot";
import Beneficios2 from "./Beneficios2";
import Lives from "./Lives";
import Sindcapacita from "./Sindcapacita";
import Trombone from "./Denuncias";

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Notícias: Noticias,
      Pessoas: pessoas,
      Sindcapacita: Sindcapacita,
      FaleConosco: Denuncias,
      Benefícios: Beneficios2,
      Lives: Lives,
      Reclamações: Trombone,
      Login: Login,
    },
    {
      initialRouteName: "Notícias",
      drawerOpenRoute: "DrawerOpen",
      contentComponent: CustomDrawer,
      contentOptions: {
        activeTintColor: "#4934A3",
      },
    }
  )
);

export default Routes;
