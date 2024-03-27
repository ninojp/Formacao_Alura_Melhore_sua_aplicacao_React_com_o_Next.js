import nookies from 'nookies';

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

const KEY_TOKEN_ACESSO = 'ktac';
export const tokenService = {
    save(tokenDeAcesso, contexto=null){
        globalThis?.sessionStorage?.setItem(KEY_TOKEN_ACESSO, tokenDeAcesso);
        globalThis?.localStorage?.setItem(KEY_TOKEN_ACESSO, tokenDeAcesso);
        nookies.set(contexto, KEY_TOKEN_ACESSO, tokenDeAcesso, {
            maxAge: ONE_YEAR,
            path: '/'
        });
    },
    get(contexto=null){
        const cookieAtual = nookies.get(contexto);
        return cookieAtual[KEY_TOKEN_ACESSO] || '';
        //ou, globalThis?.sessionStorage?.setItem(KEY_TOKEN_ACESSO);
        //ou, localStorage?.setItem(KEY_TOKEN_ACESSO);
    },
    delete(contexto=null){
        globalThis?.sessionStorage?.removeItem(KEY_TOKEN_ACESSO);
        globalThis?.localStorage?.removeItem(KEY_TOKEN_ACESSO);
        nookies.destroy(contexto, KEY_TOKEN_ACESSO)
    }
};
