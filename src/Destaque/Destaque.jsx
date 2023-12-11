import Card from '../Componentes/Card';
import Header from '../Componentes/Header';
import "../Destaque/styleDestaque.css";
export default function Destaque(){
    const lista = JSON.parse(localStorage.getItem("Lista")).slice(-3);
    const listaDestaque = lista.slice(-4)
    return(
        <div>
            <Header/>
            <h1>TRAPS em destaque</h1>
           <div class="destaqueContainer">
          
          <Card lista = {listaDestaque}/>
      </div>  
        </div>
       
    ) 
}