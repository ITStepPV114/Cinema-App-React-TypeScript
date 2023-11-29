import { ILoginDto } from "../types/login-user";
import {instance} from "../api/axios.api";

export const  AuthService={
    async login(userData:ILoginDto):Promise<string|undefined>{
        const {data}= await instance.post<string>('accounts/login', userData);
        return data;
    },
    async logout(){}
}
