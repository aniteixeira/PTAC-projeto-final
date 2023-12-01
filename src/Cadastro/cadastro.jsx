import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [lista, setLista ] = useState(listaLocalStorage || []);
  const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1 );
 
 useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
    }, [lista]);
      
    const salvar =(e) =>{
        e.preventDefault();
         setLista([...lista, {
            categoria: categoria, marca: marca, preco: preco, imagem: imagem,
                id: id
        }]);
         setId(id + 1);
         setCategoria("");
         setMarca("");
         setPreco("");
         setImagem("");
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
      
                  <p>Categoria:</p>
                      &emsp;
                  <input value={categoria} type="text"
                  onChange={(e)=>{ setCategoria(e.target.value)}}/>
                 
              
      
                      <p>Marca:</p>
                      &emsp;
                  <input value={marca} type="text"
                  onChange={(e)=>{ setMarca(e.target.value)}}/>
                  
      
                  <p>Preço:</p>
                      &emsp;
                  <input value={preco} type="text"
                  onChange={(e)=>{ setPreco(e.target.value)}}/>
                      &emsp;
      
                      <p>Procurar Imagem:</p>
                      &emsp;
                  <input value={imagem} type="text"
                  onChange={(e)=>{ setImagem(e.target.value)}}/>
                      &emsp;
                  
                  <button>ADD</button>    
                 <select onChange={(e) => { setImagem(e.target.value) }}>
                 </select>
                 
                 </form> 
                 </div>   
                  {lista.map((ativ)=>
                  <div key= {ativ.id}>
                      <Link to={'/detalhe/${ativ.id}'}>
                      <p>Categoria:{ativ.categoria}</p></Link>
                      <p>Marca:{ativ.marca}</p>
                      <p>Preço:{ativ.preco}</p>
                      <p><img src={ativ.imagem} alt=""/></p>
                      <button onClick={() => remover(ativ.id)}>Remover</button>
                  </div>
                  )}  
              </div>
          );
      }