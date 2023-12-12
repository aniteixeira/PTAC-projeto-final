import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

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
      <h1>Detalhes Lauana Prado</h1>
      <iframe src={'https://www.youtube.com/embed/' + video.Link.slice(17)}>
    </iframe>
    <p>{video.NomeMusica}</p>
    <p>{video.Artista}</p>
    <p>{video.Album}</p>
    <p>{video.Link}</p>
    </div>
)
);

}