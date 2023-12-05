import { useState, useEffect } from "react";

import Card from './Componentes/Card';
export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista"))
  console.log(lista)
    return(
        <div>
          
          <h1>PTAC 2 - PROJETO FINAL</h1>

          <Card lista = {lista}/>
        </div>
       

     );
}