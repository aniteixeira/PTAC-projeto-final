import { useState, useEffect } from "react";
import Card from "../Componente/Card";
import Header from "../Componente/Header";
import Footer from "../Componente/Footer";
export default function Home(){
    const lista = JSON.parse(localStorage.getItem("Lista")) || [];
    console.log(lista)

    return(
        <div>
            <Header/>
            <h1>Lauana Prado</h1>
            <Card lista = {lista}/>
<Footer/>
        </div>
    )
}
