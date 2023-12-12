import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Componente/Header";

export default function Cadastro() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [NomeMusica, setNomeMusica] = useState("");
  const [Artista, setArtista] = useState("");
  const [Album, setAlbum] = useState("");
  const [Link, setLink] = useState(""); 
  const [lista, setLista ] = useState(listaLocalStorage || []);
  const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1 );
 
 useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));}, [lista]);

    const navigate = useNavigate();

    const salvar = async (e) =>{
        e.preventDefault();
         await setLista([...lista, {
            NomeMusica: NomeMusica, 
            Artista: Artista, 
            Album: Album, 
            Link: Link,
                id: id
        }]);
         setId(id + 1);
         setNomeMusica("");
         setArtista("");
         setAlbum("");
         setLink("");
         navigate("/");
        };
      

      
          return (
              <div>
                <Header/>
                <Link to="/">Home</Link>
                  <form onSubmit={salvar}>
      
            <p>Nome da Musica:</p>
                     &emsp;
                 <input value={NomeMusica} type="text"
                  onChange={(e)=>{ setNomeMusica(e.target.value)}}/>
                
      
            <p>Artista:</p>
                     &emsp;
                 <input value={Artista} type="text"
                  onChange={(e)=>{ setArtista(e.target.value)}}/>
                  
      
            <p>Álbum:</p>
                     &emsp;
                 <input value={Album} type="text"
                  onChange={(e)=>{ setAlbum(e.target.value)}}/>
                      &emsp;
      
            <p>Link:</p>
                     &emsp;
                 <input value={Link} type="text"
                  onChange={(e)=>{ setLink(e.target.value)}}/>
                      &emsp;
                  
            <button>Cadastrar Música</button>    
                 </form>
                 </div> 
       
        );
}
        