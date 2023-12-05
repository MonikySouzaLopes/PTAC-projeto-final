import { useState, useEffect } from "react";
import "./style.css";
import Card from './Componentes/Card';
export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista"))
  console.log(lista)
    return(
        <div>
          
          <h1>TRAP gospel</h1>

          <Card lista = {lista}/>
        </div>
       

     );
}