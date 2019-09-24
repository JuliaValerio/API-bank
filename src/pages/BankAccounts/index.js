import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './style.css'


export default class BankAccounts extends Component {
    state = {
        bank_accounts: [],
        accountsInfos: {},
        users: [],
        id:[]

    };

    componentDidMount() {
        this.loadAccounts();

    }

    loadAccounts = async () => {
        const response = await api.get(`/bank_accounts/`)
        console.log(response.data["hydra:member"]);

        const { hydra:member, ...accountsInfos } = response.data
        this.setState({ bank_accounts: response.data["hydra:member"], accountsInfos })
    }


    render() {

        const { bank_accounts } = this.state;

        return (
            
            <div className='accounts-list'>
                {bank_accounts.map(bank => (
                    <article key={bank.id}>
                        <h2>/bank_accounts/{bank.id}</h2>
                        <h3>ID: {bank.user}</h3>
                        <h4>{bank.bank}</h4>
                        <strong>Nome da Conta: {bank.accountName}</strong>
                        <strong>Agência: {bank.agency} Digito: {bank.agencyDigit}</strong>
                        <strong>Número da Conta:{bank.accountNumber} Digito: {bank.accountDigit}</strong>
                        <strong>Tipo da Conta:{bank.accountType}</strong>
                    </article>
                    
                ))}
                <Link to={`/`} className="btn_account" href="">Voltar</Link>
            </div>
        )
    }
}