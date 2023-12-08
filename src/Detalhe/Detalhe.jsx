import {Link, useParams} from "react-router-dom";
import Header from '../Componentes/Header'
export default function Detalhe(){
    
    const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    

   const video =  lista.filter((objeto) => {
        if(objeto.id == id){
            return objeto;
        }
        return null
    })
    return(

        video.map((video)=>
            <div key= {video.id}>
                      <Header/>
                      <h1>Detalhes do TRAP</h1>
                <p><strong>Nome da música:</strong>{video.NomeDaMusica}</p>
                <iframe width="300" height="200" src={
                    'https://www.youtube.com/embed/' + video.Link.slice(17)
                } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p><strong>Letra:</strong>{video.Letra}</p>
                <p><strong>Artista:</strong>{video.Artista}</p>
                <p><strong>Data de Lançamento:</strong>{video.DataLançamento}</p>
               
            </div>
            )
    );
}