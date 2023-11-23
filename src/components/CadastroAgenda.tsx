import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Header from './Header';
import style from '../template.module.css'
import Footer from './Footer';
import axios from 'axios';
import { CadastroInterface } from '../Interfaces/CadastroProfissionalInterface';







const CadastroAgenda = () => {

    const [profissional_id, setPrficional_id] = useState<string>("");
    const [dataHora, setDataHora] = useState<string>("");
    const [profissional, setProfissional] = useState<CadastroInterface[]>([]);


    const cadastrarAgenda = (e: FormEvent) => {
        e.preventDefault();


        const dados = {
            profissional_id: profissional_id,
            dataHora: dataHora,


        }

        axios.post('http://127.0.0.1:8000/api/agenda',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
        ).then(function (response) {

            alert('cadastro Agenda realizado com sucesso')


             window.location.href = "/ListagemAgenda"
        }).catch(function (error) {
            console.log(error)
            
        });
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/Profissional/visualizar');
                if (true == response.data.status) {
                    setProfissional(response.data.data)
                    console.log(profissional);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "dataHora") {
            setDataHora(e.target.value);
        }
    }

    const handleProfissionalSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setPrficional_id(e.target.value);
    }

    return (
        <div>
            <Header />
            <main className={style.main}>
                <div className='container'>

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar </h5>
                            <form onSubmit={cadastrarAgenda} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Profcional_Id</label>
                                    <select name='profissional_id' id='profissional_id ' className='form-control' required onChange={handleProfissionalSelect}   >
                                        <option value="0">Selecione um Profissional</option>
                                        {profissional.map(profissional => (
                                            <option key={profissional.id} value={profissional.id}>
                                                {profissional.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label' >Data e hora</label>
                                    <input type="datetime-local" name='dataHora' className='form-control' required onChange={handleState} />
                                </div>

                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Cadastrar</button >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}

export default CadastroAgenda;