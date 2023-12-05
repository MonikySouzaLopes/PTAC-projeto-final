import {Link} from "react-router-dom";
export default function Card({lista}){

    return(
        lista.map((video)=>
            <div key= {video.id}>
                <Link to={`/Detalhe/${video.id}`}>
                <p><strong>Nome da música:</strong>{video.NomeDaMusica}</p>
                </Link>
                
               <iframe width="718" height="404" src={
                    'https://www.youtube.com/embed/' + video.Link.slice(17)
                } title="Nesk Only &amp; 2metro - Limitado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            )
    );
}