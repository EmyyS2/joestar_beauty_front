import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import styles from '../template.module.css'
import Footer from './Footer'

const CadastroServico = () => {
    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [erro, setErro] = useState<string>("");


    const [nomeError, setNomeError] = useState<string>("");
    const [precoError, setPrecoError] = useState<string>("");
    const [descricaoError, setDescricaoError] = useState<string>("");
    const [duracaoError, setDuracaoError] = useState<string>("");

    const cadastrarServico = (e: FormEvent) => {
        setNomeError("")
        setPrecoError("")
        setDescricaoError("")
        setDuracaoError("")
        e.preventDefault();
        const dados = {
            nome: nome,
            preco: preco,
            descricao: descricao,
            duracao: duracao,
        };

        console.log(dados);
        axios
            .post("http://127.0.0.1:8000/api/servico", dados, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {

                if (response.data.success === false) {
                    if ('nome' in response.data.error) {
                        setNomeError(response.data.error.nome[0])
                    }
                    if ('preco' in response.data.error) {
                        setPrecoError(response.data.error.preco[0])
                    }
                    if ('descricao' in response.data.error) {
                        setDescricaoError(response.data.error.descricao[0])
                    }
                    if ('duracao' in response.data.error) {
                        setDuracaoError(response.data.error.duracao[0])
                    }
                } else {
                    window.location.href = "/ListagemServico";
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "preco") {
            setPreco(e.target.value);
        }
        if (e.target.name === "descricao") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "duracao") {
            setDuracao(e.target.value);
        }
    };

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Serviços✩</h5>
                            <form onSubmit={cadastrarServico} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className="form-label">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        name="nome"
                                        className="form-control"
                                        required
                                        onChange={handleState}
                                    /><div className='text-danger'>{nomeError}</div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="preco" className="form-label">
                                        Preço
                                    </label>
                                    <input
                                        type="decimal"
                                        name="preco"
                                        className="form-control"
                                        required
                                        onChange={handleState}
                                    /><div className='text-danger'>{precoError}</div>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="descricao" className="form-label">
                                        Descrição
                                    </label>
                                    <input
                                        type="text"
                                        name="descricao"
                                        className="form-control"
                                        required
                                        onChange={handleState}
                                    /><div className='text-danger'>{descricaoError}</div>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="duracao" className="form-label">
                                        Duração
                                    </label>
                                    <input
                                        type="text"
                                        name="duracao"
                                        className="form-control"
                                        required
                                        onChange={handleState}
                                    /><div className='text-danger'>{duracaoError}</div>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-success btn-sm">
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default CadastroServico;