import { useState, useEffect } from "react";
import "./style.css";
import Card from './Componentes/Card';
import Header from "./Componentes/Header";
import Footer from './Componentes/Footer';

export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista")) || [];
  console.log(lista)

    return(
        <div>
          <Header/>
          <h1>TRAP gospel</h1>

          <Card lista = {lista}/>
          <Footer/>
        </div>
       

     );
}