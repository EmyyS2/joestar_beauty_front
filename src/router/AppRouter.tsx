import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroDeClientes from "../components/CadastroClientes";
import CadastroDeProfissionais from "../components/CadastrodeProfissionais";
import CadastroServico from "../components/CadastrodeSevicos";
import ListagemDeClientes from "../components/Listagem";
import ListagemProfissional from "../components/ListagemDeProfissionais";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="CadastroDeClientes" element={<CadastroDeClientes />} />
                <Route path="CadastroDeProfissionais" element={<CadastroDeProfissionais/>} />
                <Route path="CadastroDeServicos" element={<CadastroServico/>} />
                <Route path="ListagemDeClientes" element={<ListagemDeClientes/>} />
                <Route path="ListagemDeProfissional" element={<ListagemProfissional/>} />
            </Routes>
        </BrowserRouter>
    );

}
export default AppRoute;