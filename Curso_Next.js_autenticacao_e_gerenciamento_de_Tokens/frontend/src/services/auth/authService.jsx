import HttpClient from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
    async login({username, password}) {
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
            method: 'POST',
            body: {username, password}
        })
        .then(async (respostaDoServidor) => {
            if(!respostaDoServidor.ok) throw new Error('Senha ou Usuário digitado estão incorretos!')
            const resBody = respostaDoServidor.body;
            // console.log(resBody.data.access_token)
            tokenService.save(resBody.data.access_token)
        })
    }
};
