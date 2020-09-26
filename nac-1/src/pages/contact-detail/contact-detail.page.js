import React from 'react';
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth.service';
import contactsService from '../../services/contacts.service';

class ContactDetail extends React.Component{

    state = {
        contactInfo: {},
        redirect: ''
    }

    componentDidMount(){
        const user = authService.getCredentials();
        if (!user) {
            this.setState({redirect: '/'});
        }else{
            this.loadContactInfo()
        }
    }

    async loadContactInfo(){
        const id = this.props.match.params.id
        try {
            const res = await contactsService.getContactById(id)
            this.setState({contactInfo: res.data.data})
        } catch (error) {
            console.log(error)
            alert("Ocorreu um erro ao tentar carregar os dados")
        }
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return(
            <div className="container mt-5">
                <h1>Contact Detail</h1>
                <div className="card" style={{width: "18rem", margin: "auto"}}>
                    <img src={this.state.contactInfo.avatar} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5>{this.state.contactInfo.name}</h5>
                        <p className="card-text"><span className="font-weight-bold">Telefone: </span>{this.state.contactInfo.phone}</p>
                        <p className="card-text"><span className="font-weight-bold">Celular: </span>{this.state.contactInfo.cell}</p>
                        <p className="card-text"><span className="font-weight-bold">Email: </span>{this.state.contactInfo.email}</p>
                        <button className="mt-3 btn btn-outline-danger">Excluir</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default ContactDetail;