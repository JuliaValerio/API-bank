import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './style.css'


export default class BankAccounts extends Component {
    state = {
        bank_accounts: [],
        accountsInfos: {}

    };

    componentDidMount() {
        this.loadAccounts();

    }

    loadAccounts = async () => {
        const response = await api.get(`/bank_accounts/`)
        console.log(response.data["hydra:member"]);

        const { hydra: member, ...accountsInfos } = response.data

        this.setState({ bank_accounts: response.data["hydra:member"], accountsInfos })
    }


    render() {

        const { bank_accounts } = this.state;

        return (
            <div className='users-list'>
                {bank_accounts.map(bank => (
                    <article key={bank.id}>
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