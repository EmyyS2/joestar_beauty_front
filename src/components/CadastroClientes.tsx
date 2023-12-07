import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import style from '../template.module.css'
import Footer from './Footer';

const CadastroClientes = () => {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("")
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [password, setPassword] = useState<string>("");

   
    
    const [nomeError, setNomeError] = useState<string>("");
    const [celularError, setCelularError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [cpfError, setCpfError] = useState<string>("");
    const [dataNascimentoError, setDataNascimentoError] = useState<string>("")
    const [cidadeError, setCidadeError] = useState<string>("");
    const [estadoError, setEstadoError] = useState<string>("");
    const [paisError, setPaisError] = useState<string>("");
    const [ruaError, setRuaError] = useState<string>("");
    const [numeroError, setNumeroError] = useState<string>("");
    const [bairroError, setBairroError] = useState<string>("");
    const [cepError, setCepError] = useState<string>("");
    const [complementoError, setComplementoError] = useState<string>("");
    const[erro, setErro]=useState<string>("")





    const findCep = (e: FormEvent) => {

        e.preventDefault();

        fetch('https://viacep.com.br/ws/' + cep + '/json/',
            {
                method: 'GET'
            }
        ).then(response => response.json())
            .then(
                data => {
                    console.log(data);

                    setCidade(data.localidade);
                    setPais(data.pais);
                    setEstado(data.uf);
                    setRua(data.logradouro);
                    setBairro(data.bairro);
                    //setCep(data.cep);


                }
            ).catch(error => {setErro("Pesquisa invalida")});
        }
    
        const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
            if(e.target.name === "cep"){
                setCep(e.target.value);
            }
        }

    const cadastrarUsuario = (e: FormEvent) => {
        setNomeError("")
        setCelularError("")
        setEmailError("")
        setDataNascimentoError("")
        setCpfError("")
        setCidadeError("")
        setEstadoError("")
        setPaisError("")
        setRuaError("")
        setNumeroError("")
        setBairroError("")
        setCepError("")
        setComplementoError("")
    

        e.preventDefault();
        const dados = {
            nome: nome,
            email: email,
            celular: celular,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password
        }

        console.log(dados)
        axios.post('http://127.0.0.1:8000/api/clientes', dados, {
            headers:
                { "Accept": "application/json", "Content-Type": "application/json" }
        }).then(function (response) {
            if (response.data.success === false) {
            if ('nome' in response.data.error) {
                setNomeError(response.data.error.nome[0])
            }
            if ('celular' in response.data.error) {
                setCelularError(response.data.error.celular[0])
            }
            if ('email' in response.data.error) {
                setEmailError(response.data.error.email[0])
            }
            if ('cpf' in response.data.error) {
                setCpfError(response.data.error.cpf[0])
            }
            if ('dataNascimento' in response.data.error) {
                setDataNascimentoError(response.data.error.dataNascimento[0])
            }
            if ('cidade' in response.data.error) {
                setCidadeError(response.data.error.cidade[0])
            }
            if ('estado' in response.data.error) {
                setEstadoError(response.data.error.estado[0])
            }
            if ('pais' in response.data.error) {
                setPaisError(response.data.error.pais[0])
            }
            if ('rua' in response.data.error) {
                setRuaError(response.data.error.rua[0])
            }
            if ('numero' in response.data.error) {
                setNumeroError(response.data.error.numero[0])
            }
            if ('bairro' in response.data.error) {
                setBairroError(response.data.error.bairro[0])
            }
            if ('cep' in response.data.error) {
                setCepError(response.data.error.cep[0])
            }
            if ('complemento' in response.data.error) {
                setComplementoError(response.data.error.complemento[0])
            }
           
        }else{
            window.location.href = "/ListagemDeClientes"
        }
        }).catch(function (error) {
            console.log(error);
        });
    }



    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "cpf") {
            setCpf(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        if (e.target.name === "celular") {
            setCelular(e.target.value);
        }
        if (e.target.name === "dataNascimento") {
            setDataNascimento(e.target.value);
        }
        if (e.target.name == "cidade") {
            setCidade(e.target.value);
        }
        if (e.target.name == "estado") {
            setEstado(e.target.value);
        }
        if (e.target.name == "pais") {
            setPais(e.target.value);
        }
        if (e.target.name == "rua") {
            setRua(e.target.value);
        }
        if (e.target.name == "numero") {
            setNumero(e.target.value);
        }
        if (e.target.name == "bairro") {
            setBairro(e.target.value);
        }
        if (e.target.name == "cep") {
            setCep(e.target.value);
        }
        if (e.target.name == "complemento") {
            setComplemento(e.target.value);
        }
    }

    return (
        <div>
            <Header />
            <main className={style.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Clientes✩</h5>
                            <form onSubmit={cadastrarUsuario} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} placeholder='ex: Maria' /><div className='text-danger'>{nomeError}</div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label' >E-mail</label>
                                    <input type="email" name='email' className='form-control' required onChange={handleState} placeholder='ex: xxxx@gmail.com' /><div className='text-danger'>{emailError}</div>

                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState} placeholder='ex: 11111111111' /><div className='text-danger'>{cpfError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="dataNascimento" className='form-label'>Data de Nascimento</label>
                                    <input type="date" name='dataNascimento' className='form-control' required onChange={handleState} /><div className='text-danger'>{dataNascimentoError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cep" className='form-label'>Cep</label>
                                    <input type="text" name='cep' className='form-control' required onBlur={findCep} onChange={handleState} placeholder='Só  numeros' /><div className='text-danger'>{cepError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="estado" className='form-label'>Estado</label>
                                    <input type="text" name='estado' value={estado} className='form-control' required onChange={handleState} placeholder='ex:SP' /><div className='text-danger'>{estadoError}</div>
                                </div>

                                <div className='col-4'>
                                    <label htmlFor="cidade" className='form-label'>Cidade</label>
                                    <input type="text" value={cidade} name='cidade' className='form-control' required onChange={handleState} placeholder='ex: Presidente Prudente' /><div className='text-danger'>{cidadeError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="celular" className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-control' required onChange={handleState} placeholder='ex: Apenas 11 numeros' /><div className='text-danger'>{celularError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="celular" className='form-label'>Pais</label>
                                    <input type="text" name='pais' className='form-control' required onChange={handleState} placeholder='ex: Brasil' /><div className='text-danger'>{paisError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input type="text" value={rua} name='logradouro' className='form-control' required onChange={handleState} placeholder='ex: Osvaldo Cruz' /><div className='text-danger'>{ruaError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="numero" className='form-label'>Numero</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState} placeholder='ex: Apenas 11 numeros' /><div className='text-danger'>{numeroError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="bairro" className='form-label'>Bairro</label>
                                    <input type="text" value={bairro}name='bairro' className='form-control' required onChange={handleState} placeholder='ex: renascer' /><div className='text-danger'>{bairroError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState} placeholder='ex: Quinta rua' /><div className='text-danger'>{complementoError}</div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="password" name='password' className='form-control' required onChange={handleState} placeholder='numeros, caracteres,simbolos' />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Cadastrar</button >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}


export default CadastroClientes;