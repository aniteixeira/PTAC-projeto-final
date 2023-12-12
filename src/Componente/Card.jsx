import { Link } from "react-router-dom"
export default function Card({lista}){

    return(
        lista.map((video) =>
          <div key= {video.id}>
            <p>Nome da Música:{video.NomeMusica}</p>
    <Link to = {`/Detalhe/${video.id}`}>
    <iframe  width="300" height="200" src={'https://www.youtube.com/embed/' + video.Link.slice(17)}>
 </iframe>
    </Link>
        </div>
        )
 );
    }