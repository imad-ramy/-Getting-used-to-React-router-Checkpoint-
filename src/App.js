import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import categorie from "./categorie"

import Accueil from "./accueil";
import tendance from "./tendance";


  export default class App extends React.Component {
    render() {
      return (
               
        <switch>  
        <BrowserRouter>  
        <Route path="//"  component={Accueil}/>
        <Route path="/categorie" component={categorie}/>
        <Route path="/tendance"  component={tendance}/>
        </BrowserRouter>
        </switch>      
          
          
        
      );    
    }
  }
