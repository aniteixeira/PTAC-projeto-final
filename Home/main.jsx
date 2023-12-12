import React from "react";
import { ReactDOM } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Home/Home";
import Cadastro from "../src/Cadastro/cadastro";
import Detalhe from "../Detalhe/detalhe";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path='/cadastro' element={Cadastro}></Route>
            <Route path='/' element={Home}></Route>
            <Route path='/detalhe' element={Detalhe}></Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
)