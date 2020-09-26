import React from 'react';
import { Redirect } from 'react-router-dom'
import authService from '../../services/auth.service';
import Modal from '../../components/modal/modal'

class Register extends React.Component{

    state = {
        name: '',
        email: '',
        password: '',
        confirmation: '',
        toggleModal: false,
        modalText: '',
        wasRegistered: false,
        redirect: ''
    };


    handleValidation(){
        if (this.state.password !== this.state.confirmation) {
            return false;
        };
        return true;
    };

    submitNewUser = async event => {
        event.preventDefault();
        const isValid = this.handleValidation();
        if (!isValid) {
            this.setState({toggleModal: true, modalText: "As senhas não conferem"})
        }else{
            const data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            try {
                const res = await authService.createUser(data)
                if (res.data.message === "success") {
                    this.setState({toggleModal: true, modalText: "Usuario cadastrado com sucesso", wasRegistered: true})
                    authService.storeCredentials(res.data)
                }
            } catch (error) {
                console.log(error)
                this.setState({toggleModal: true, modalText: "Ocorreu um erro durante o cadastro", wasRegistered: false})
            }
        }
    }

    closeModal = () => {
        this.setState({toggleModal: false});
        if (this.state.wasRegistered) {
            setTimeout(() =>  {
                this.setState({redirect: '/contacts'})
            }, 1000);
        }
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return(
            <div className="container mt-5">
                <Modal toggle={this.state.toggleModal} closeModal={this.closeModal}>
                    <p>{this.state.modalText}</p>
                </Modal>
                <h1>Register Page</h1>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.submitNewUser}>
                            <div className="form-group">
                                <label>Nome</label>
                                <input required type="text" className="form-control" value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input required type="email" className="form-control" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input required type="password" className="form-control" value={this.state.password} onChange={event => this.setState({password: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Confirmar Senha</label>
                                <input required type="password" className="form-control" value={this.state.confirmation} onChange={event => this.setState({confirmation: event.target.value})}/>
                            </div>
                            <button type="submit" className="btn btn-outline-success">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register