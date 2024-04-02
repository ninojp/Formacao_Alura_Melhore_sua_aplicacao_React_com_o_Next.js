// Arquitetura hexagonal
import { tokenService } from "../../services/auth/tokenService";
import nookies from 'nookies';

// Ports & Adapters
export default async function HttpClient(fetchUrl, fetchOptions) {
    const options = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null
    }
    // console.log(options)
    return fetch(fetchUrl, options)
        .then(async (respostaDoServidor) => {
            return {
                ok: respostaDoServidor.ok,
                status: respostaDoServidor.status,
                statusText: respostaDoServidor.statusText,
                body: await respostaDoServidor.json()
            }
        })
        .then(async (response) => {
            if(!fetchOptions.refresh) return response
            if(response.status !== 401) return response
            console.log('Middleware: Rodar o codigo para atualizar o token')

            const isServer = Boolean(fetchOptions?.ctx);
            const currentRefreshToken = fetchOptions?.ctx?.req?.cookies['REFRESH_TOKEN_NAME'];
            // console.log('currentRefreshToken: ', currentRefreshToken)
            
            try{
                // Tenta atualizar os tokens
                const refreshResponse = await HttpClient('http://localhost:3000/api/refresh', {
                    method: isServer ? 'PUT' : 'GET',
                    body: isServer ? {refresh_token: currentRefreshToken} : undefined
                })
                // console.log(refreshResponse.body.data)
                // console.log('refreshResponse: ',refreshResponse)
                const newAccessToken = refreshResponse.body.data.access_token
                const newRefreshToken = refreshResponse.body.data.refresh_token

                // Gaurda os tokens
                if(isServer){
                    nookies.set(fetchOptions.ctx, 'REFRESH_TOKEN_NAME', newRefreshToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        path: '/'
                    });
                }
                tokenService.save(newAccessToken);
                // Tentar rodar o request anterior
                const retryResponse = await HttpClient(fetchUrl, {
                    ...options,
                    refresh: false,
                    headers: {
                        'Authorization': `Bearer ${newAccessToken}`
                    }
                });
                console.log('retryResponse: ', retryResponse)
                return retryResponse;
            }catch(err){
                console.error(err)
                return response
            }
        });
};
