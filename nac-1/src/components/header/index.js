import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/auth.service';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount(){
        this.loadUserData();
    };

    loadUserData(){
        const data = authService.getCredentials();
        console.log(data)
        if (data) {
            this.setState({user: data});
        };
    }

    loggout(){
        authService.clearCredentials();
        window.location.reload();
    };

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Nac 3</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {(this.state.user) ? (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/contacts">Lista de contatos</Link>
                            </li>
                        ) : null}
                        <li className="nav-item">
                            <Link className="nav-link" to="/group-info">Infomações do grupo</Link>
                        </li>
                    </ul>
                    {(this.state.user) ? (
                        <div className="ml-auto row">
                            <div className="mr-5">
                                <h6 style={{color: 'white', marginBottom: '0'}}>{this.state.user.data.name}</h6>
                                <span style={{color: 'white', marginTop: '0'}}>{this.state.user.data.email}</span>
                            </div>
                            <button className="btn btn-outline-info" onClick={() => this.loggout()}>Loggout</button>
                        </div>
                    ): null}
                </div>
            </nav>
        );
    };
}

export default Header;