import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import "../style.css";




export default function Cadastrar() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
   const [NomeDaMusica, setNomeDaMusica ] = useState("");
   const [Letra, setLetra ] = useState("");
   const [Artista, setArtista ] = useState("");
   const [Link, setLink] = useState("");
   const [DataLançamento, setDataLançamento] = useState("");
   const [lista, setLista ] = useState(listaLocalStorage || []);
   const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  const navigate = useNavigate();
    const salvar = async (e) =>{
        e.preventDefault();
       await setLista([...lista, {
                NomeDaMusica: NomeDaMusica, Letra: Letra, Artista: Artista, 
                Link: Link, DataLançamento: DataLançamento,
                id: id
        }]);
        setId(id + 1);
        setNomeDaMusica("");
        setLetra("");
        setArtista("");
        setLink("");
        setDataLançamento("");
        navigate("/");
        console.log(id)
    }

    return (
      <div class="centralizar">
        <Header/>
        <h2>Cadastrar TRAP</h2>
          <div class="cadastro"> 
          
          <form onSubmit={salvar}>

              <p><strong>Nome da música:</strong></p>
              &emsp;
          <input value={NomeDaMusica} type="text"
          onChange={(e)=>{ setNomeDaMusica(e.target.value)}}/>

           <p><strong>Letra:</strong></p>
        &emsp;
          <input value={Letra} type="text"
          onChange={(e)=>{ setLetra(e.target.value)}}/>

          <p><strong>Artista:</strong></p>
         &emsp;
          <input value={Artista} type="text"
          onChange={(e)=>{ setArtista(e.target.value)}}/>

          <p><strong>URL do vídeo:</strong></p>
          &emsp;
          <input value={Link} type="text"
          onChange={(e)=>{ setLink(e.target.value)}}/>
          &emsp;

          <p><strong>Data de lançamento:</strong></p>
          &emsp;
          <input value={DataLançamento} type="text"
          onChange={(e)=>{ setDataLançamento(e.target.value)}}/>
          &emsp;
          
          <button className="btn btn-dark">ADD</button>
          </form>   
          </div>    
          <br />
          <br />
          <Footer/>
      </div>

      
    );
    }
    
    
  
  
  

    