import { Link } from "react-router-dom"
export default function Card({lista}){

    return(
        lista.map((video) =>
          <div key= {video.id}>
            <p>Nome da Música:{video.NomeMusica}</p>
    <Link to = {`/Detalhe/${video.id}`}>
    <button>Ver Mais</button>
    </Link>

 <iframe src={'https://youtu.be/46ihksJYvfE?si=Mr4euVy2EUsm50gi' + video.Link.slice(17)} frameBorder="0">
 </iframe>

 <button class="btn btn-outline-danger" onClick={() => remover(video.id)}>Remover</button>
 </div>
        )
 );
    }