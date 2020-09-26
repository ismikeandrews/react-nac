import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Modal from '../../components/modal/modal';
import authService from '../../services/auth.service'
class Login extends React.Component {

   state = {
       email: '',
       password: '',
       toggleModal: false,
       modalText: '',
       wasLogged: false,
       redirect: ''
   };

    closeModal = () => {
        this.setState({toggleModal: false});
        if (this.state.wasLogged) {
            setTimeout(() =>  {
                this.setState({redirect: '/contacts'})
            }, 1000);
        }
    }

     handleLogin = async event => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        try {
            const res = await authService.login(data)
            console.log(res)
            this.setState({toggleModal: true, modalText: 'Login realizado com sucesso', wasLogged: true})
            authService.storeCredentials(res.data)
        } catch (error) {
            console.log(error)
            this.setState({toggleModal: true, modalText: 'Login não autorizado por favor verifique os dados e tente novamente', wasLogged: false})
        }
    };

    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return(
            <div className="container mt-5">
                <Modal toggle={this.state.toggleModal} closeModal={this.closeModal}>
                    <p>{this.state.modalText}</p>
                </Modal>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.handleLogin}>
                            <div className="form-group">
                                <label>Email</label>
                                <input required type="email" className="form-control" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
                                <small className="form-text text-muted">Nunca compartilharemos suas informações :)</small>
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input required type="password" className="form-control" value={this.state.password} onChange={event => this.setState({password: event.target.value})}/>
                            </div>
                            <Link className="btn btn-outline-primary mr-4" to="/register">Cadastre-se</Link>
                            <button type="submit" className="btn btn-outline-success">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default Login;