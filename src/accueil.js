import React from 'react';
import {  Link} from "react-router-dom";
export default class Acceuil extends React.Component {


render(){
  return (
<div>
      <h1>categorie</h1>
      
      <Link to="/categorie">Acceuil</Link>
      <br></br>
      <Link to="/tendance">tendance</Link>

  </div>
  );

}
}
