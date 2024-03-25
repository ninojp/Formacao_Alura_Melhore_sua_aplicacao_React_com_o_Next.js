import { useState } from "react";
import { useRouter } from 'next/router';
import styles from './HomeScreen.module.css';

export default function HomeScreen() {
    const router = useRouter()
    const [valores, setValores] = useState({
        usuario: 'ninojp',
        senha: 'safepassword'
    });
    function capturarMudanca(evento){
        const valorCampo = evento.target.value;
        const nomeCampo = evento.target.name;
        setValores((valorAtual) => {
            return{
                ...valorAtual,
                [nomeCampo]: valorCampo
            }
        });
    };
    return (
        <div className={styles.div_container}>
            <h1>Login</h1>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                router.push('auth-page-static');
                // router.push('auth-page-ssr');
                }}>
                <input
                    placeholder="Usuário" name="usuario"
                    value={valores.usuario}
                    onChange={capturarMudanca}
                />
                <input
                    placeholder="Senha" name="senha" type="password"
                    value={valores.senha}
                    onChange={capturarMudanca}
                />
                {/* <pre>
                    {JSON.stringify(valores, null, 2)}
                </pre> */}
                <div>
                    <button>
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
}
