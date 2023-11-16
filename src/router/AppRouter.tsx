import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroDeClientes from "../components/CadastroClientes";
import CadastroDeProfissionais from "../components/CadastrodeProfissionais";
import CadastroServico from "../components/CadastrodeSevicos";
import EditarClientes from "../components/editarClientes";
import EditarProfissional from "../components/editardosProfissionais";
import EditarServicos from "../components/editarServicos";
import ListagemDeClientes from "../components/ListagemDeClientes";
import ListagemProfissional from "../components/ListagemDeProfissionais";
import ListagemDeServico from "../components/ListagemDeServicos";
import RedefinirSenha from "../components/redefinirSenha";
import RedefinirSenhaDosProfissionais from "../components/redefinirSenhaDosProfissionais";




const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="CadastroDeClientes" element={<CadastroDeClientes />} />
                <Route path="CadastroDeProfissionais" element={<CadastroDeProfissionais/>} />
                <Route path="CadastroDeServicos" element={<CadastroServico/>} />
                <Route path="ListagemDeClientes" element={<ListagemDeClientes/>} />
                <Route path="ListagemDeProfissional" element={<ListagemProfissional/>} />
                <Route path="ListagemServico" element={<ListagemDeServico/>} />
                <Route path="/EditarClientes/:id" element={<EditarClientes />}/>
                <Route path="/EditarProfissionais/:id" element={<EditarProfissional />}/>
                <Route path="/EditarServico/:id" element={<EditarServicos />}/>
                <Route path="/redefinirSenha" element={<RedefinirSenha />}/>
                <Route path="/redefinirSenhaDosProfissionais" element={<RedefinirSenhaDosProfissionais />}/>
            </Routes>
        </BrowserRouter>
    );

}
export default AppRoute;