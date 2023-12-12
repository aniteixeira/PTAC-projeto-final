import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import Header from "../Componente/Header"

export default function Detalhe(){
const {id} = useParams();
const lista = JSON.parse( localStorage.getItem("Lista"));

const videoLauana = lista.filter((objeto) => {
  if(objeto.id == id){
    return objeto;
}
    return null;
})

return (
videoLauana.map((video) =>
    <div key ={video.id}>
      <Header/>
      <h1>Detalhes Lauana Prado</h1>
      <iframe src={'https://youtu.be/46ihksJYvfE?si=Mr4euVy2EUsm50gi' + video.Link.slice(17)} frameBorder="0">
    </iframe>
    <p>{video.NomeMusica}</p>
    <p>{video.Artista}</p>
    <p>{video.Album}</p>
    <p>{video.Link}</p>
    </div>
)
);

}