import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './style.css'

export default class Main extends Component {
    state = {
        users: [],
        usersInfos: {},
        page: 1,

    };

    componentDidMount() {
        this.loadUsers();
    }

    // Chamada da API
    loadUsers = async (page = 1) => {

        const response = await api.get(`/users?page=${page}&?limit=5`);
        console.log(response.data["hydra:member"]);
        const { hydra: member, ...usersInfos } = response.data
        this.setState({ users: response.data["hydra:member"], usersInfos, page });
    }

    //Navegadores de pagina Anterior e Proxímo
    prevPage = () => {

        const { page, usersInfos } = this.state;
        if (page === usersInfos.pages) return;
        const pageNumber = page - 1;
        this.loadUsers(pageNumber);

    }
    nextPage = () => {
        const { page, usersInfos } = this.state;
        if (page === usersInfos.pages) return;
        const pageNumber = page + 1;
        this.loadUsers(pageNumber);

    }

    render() {

        const { users, page, usersInfos } = this.state;
        return (
            <div className='users-list'>
            <Link to={`/AddUser/`} className="btn_addUser" >Novo Cadastro</Link>
                {users.map(users => (
                    <article key={users.id}>
                        <h1>{users.name}</h1>
                        <strong>ID: /Users/{users.id}</strong>
                        <strong>CPF: {users.cpf}</strong>
                        <strong>E-mail: {users.email}</strong>
                        <h3>Contas Bancarias Vinculadas a {users.name}</h3>  
                        <h4>{users.bankAccounts[0]}</h4>
                        <h4>{users.bankAccounts[1]}</h4>
                        <h4>{users.bankAccounts[2]}</h4>
                        <h4>{users.bankAccounts[3]}</h4> 
                      </article>
                     
                ))}

<Link to={`/bank_accounts/`} className="btn_account" href="">Acessar Contas Bancarios</Link>

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === usersInfos.pages} onClick={this.nextPage}>Proxímo</button>
                </div>

            </div>
        )
    }
}