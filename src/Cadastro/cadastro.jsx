import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [nomeMusica, setNomeMusica] = useState("");
  const [artista, setArtista] = useState("");
  const [dataLanca, setDataLanca] = useState("");
  const [link, setLink] = useState("");
  const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1 );
 
 useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
    }, [lista]);
      
    const salvar =(e) =>{
        e.preventDefault();
         setLista([...lista, {
            nomeMusica: nomeMusica, artista: artista, dataLanca: dataLanca, link: link,
                id: id
        }]);
         setId(id + 1);
         setNomeMusica("");
         setArtista("");
         setDataLanca("");
         setLink("");
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
                  <Link to="/">home</Link>
                  <h1>Adicionar aparelho ao seu carrinho:</h1>
                  <div class="flex.conteiner">   
                  <form onSubmit={salvar}>
      
                  <p>Nome da Musica:</p>
                      &emsp;
                  <input value={nomeMusica} type="text"
                  onChange={(e)=>{ setNomeMusica(e.target.value)}}/>
                
      
                      <p>Artista:</p>
                      &emsp;
                  <input value={artista} type="text"
                  onChange={(e)=>{ setArtista(e.target.value)}}/>
                  
      
                  <p>Data de Lançamento:</p>
                      &emsp;
                  <input value={dataLanca} type="text"
                  onChange={(e)=>{ setDataLanca(e.target.value)}}/>
                      &emsp;
      
                      <p>Link:</p>
                      &emsp;
                  <input value={link} type="text"
                  onChange={(e)=>{ setLink(e.target.value)}}/>
                      &emsp;
                  
                  <button>ADD</button>    
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