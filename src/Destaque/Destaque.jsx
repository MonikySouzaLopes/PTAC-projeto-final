import Card from '../Componentes/Card';
export default function Destaque(){
    const lista = JSON.parse(localStorage.getItem("Lista")).slice(-3);
    const listaDestaque = lista.slice(-4)
    return(
        <div>
            <Card lista = {listaDestaque}/>
        </div>
    ) 
}