
import {Link} from "react-router-dom";

export default function Card({lista}){

    return(
        lista.map((video)=>
            <div key= {video.id}>
                
                &emsp;
                <p><strong>Nome da música:</strong> {video.NomeDaMusica}</p>
               
                &emsp;
               <iframe width="300" height="200" src={
                    'https://www.youtube.com/embed/' + video.Link.slice(17)
                } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           
           <Link to={`/Detalhe/${video.id}`}>
           <button class="btn btn-outline-light">Ver mais!</button>
                </Link>
           </div>
                
                
            )
    );
}