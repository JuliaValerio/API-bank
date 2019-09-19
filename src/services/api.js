import axios from 'axios';

//Execução chamada da API

const api = axios.create({ baseURL: 'http://frontendapi.cm2tech.com.br'});

export default api;