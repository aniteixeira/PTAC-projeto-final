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
      
    const remover = (id) => {
    const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
            });
         setLista(auxLista);
        }
      
          return (
              <div>
                <Header/>
                <div>   
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
                 <select onChange={(e) => { setImagem(e.target.value) }}>
                 </select>
                 
                 </form> 
                 </div>   
                  {lista.map((ativ)=>
                  <div key= {ativ.id}>
                      <Link to={'/detalhe/${ativ.id}'}>
                      <p>Nome da Musica:{ativ.categoria}</p></Link>
                      <p>Artista:{ativ.marca}</p>
                      <p>Data de Lançamento:{ativ.preco}</p>
                      <p><img src={ativ.imagem} alt=""/></p>
                      <button onClick={() => remover(ativ.id)}>Remover</button>
                  </div>
                  )}  
              </div>
          );
      }