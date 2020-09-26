import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import contactsService from '../../services/contacts.service';
import authService from '../../services/auth.service';
class Contacts extends React.Component{

    state = {
        contactList: [],
        redirect: ''
    }

    componentDidMount(){
        const user = authService.getCredentials();
        if (!user) {
            this.setState({redirect: '/'})
        }else{
            this.loadContactList()
        }
    }

    async loadContactList(){
        try {
            const res = await contactsService.getContactList();
            this.setState({contactList: res.data.data})
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
                <h1>Lista de contatos</h1>
                <table className="table mt-3">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactList.map(contact => (
                            <tr key={contact.id}>
                                <th scope="row">{contact.id}</th>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.cell}</td>
                                <td>{contact.phone}</td>
                                <td><Link to={`/contact-detail/${contact.id}`}>Abrir</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
}

export default Contacts;