import React from 'react';

import logo from '../../assets/logo-bg.png'

export default function GroupInfo(){
    return(
        <div className="container mt-5">
            <h1>Informações do Grupo</h1>
            <hr/>
            <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={logo} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">GoodFit</h5>
                    <div>
                        <h6>Integrantes: </h6>
                        <p className="card-text">Cyntia Sayuri RM82273</p>
                        <p className="card-text">Fernando Laurino RM83825</p>
                        <p className="card-text">Luís Bispo RM80389</p>
                        <p className="card-text">Michael Andrews RM82443</p>
                        <p className="card-text">Vanessa Marques RM83690</p>

                        <h6>Credenciais de acesso: </h6>
                        <p className="card-text"><span className="font-weight-bold">Email: </span>andre@fiap.com.br</p>
                        <p className=""><span className="font-weight-bold">Senha: </span>secret</p>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
};