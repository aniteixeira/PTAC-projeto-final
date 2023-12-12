import React from "react";
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Home/Home";
import Cadastro from "./Cadastro/cadastro";
import Detalhe from "./Detalhe/detalhe";
import Destaque from "./Destaque/Destaque";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path='/src/cadastro' element={<Cadastro/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/detalhe/:id' element={<Detalhe/>}></Route>
            <Route path='/Destaque' element={<Destaque/>}></Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
)