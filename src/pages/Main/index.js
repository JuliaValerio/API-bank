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
                {users.map(users => (

                    <article key={users.id}>
                        <h3>{users.name}</h3>
                        <strong>CPF: {users.cpf}</strong>
                        <strong>E-mail: {users.email}</strong>
                        <Link to={`users/${users.id}/bank_accounts/`} className="btn_account" href="">Acessar Conta Bancaria</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === usersInfos.pages} onClick={this.nextPage}>Proxímo</button>
                </div>

            </div>
        )
    }
}