import HttpClient from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
    async login({ username, password }) {
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
            method: 'POST',
            body: { username, password }
        })
            .then(async (respostaDoServidor) => {
                if (!respostaDoServidor.ok) throw new Error('Senha ou Usuário digitado estão incorretos!')
                const resBody = respostaDoServidor.body;
                // console.log(resBody.data.access_token)
                tokenService.save(resBody.data.access_token)
                // console.log('Resposta - Body: ',resBody)
                return resBody;
            })
            .then(async ({ data }) => {
                const { refresh_token } = data;
                const response = await HttpClient('/api/refresh', {
                    method: 'POST',
                    body: {
                        refresh_token
                    }
                });
                console.log('Resposta: ', response)
            })
    },
    async getSession(ctx = null) {
        const token = tokenService.get(ctx);
        // console.log(token)
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            ctx,
            refresh: true
        })
            .then((response) => {
                if (!response.ok) throw new Error('Response: Não Autorizado!');
                return response.body.data;
            })
    }
};
