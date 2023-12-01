export default function Card({video}){

    return(
        lista.map((Cadastrar)=>
            <div key= {Cadastrar.id}>
                <Link to={`/Detalhe/${Cadastrar.id}`}>
                <p><strong>Nome da música:</strong>{Cadastrar.NomeDaMusica}</p>
                </Link>
              <iframe>
                src={
                    'https://www.youtube.com/embed' + Cadastrar.URL.slice(17)
                }
              </iframe>
                
               
            </div>
            )
    );
}