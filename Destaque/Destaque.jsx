import { useParams } from "react-router-dom";
import Card from "../Componente/Card";
export default function Destaque(){
    const DestaqMusi = JSON.parse(localStorage.getItem("Lista"));
    const Resu = DestaqMusi.slice(-3);
    console.log(Resu);

    return (
        <div>
            <Card lista={Resu}/>
        </div>
    )
}