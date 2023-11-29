import axios from 'axios';
import { getTokenFromLocalStorage } from '../services/localStorage.helper';
export const instance = axios.create({

    baseURL: 'https://cinema-api-pv114.azurewebsites.net/api/',
    headers: { 
        Authorization: `Bearer`+getTokenFromLocalStorage() || '', 
    }
});