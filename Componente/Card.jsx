import { Link } from "react-router-dom"
export default function Card({video}){

    return(
        video.map((video) =>
          <div key= {video.id}>
            <p>Nome da Música:{video.NomeMusica}</p>
    <Link to = {`/Detalhe/${video.id}`}>
    <iframe src={'https://youtu.be/46ihksJYvfE?si=Mr4euVy2EUsm50gi' + video.Link.slice(17)}>
 </iframe>
    </Link>
        </div>
        )
 );
    }