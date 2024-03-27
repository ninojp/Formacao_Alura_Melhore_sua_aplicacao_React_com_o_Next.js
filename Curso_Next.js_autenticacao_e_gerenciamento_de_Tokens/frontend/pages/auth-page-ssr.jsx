import { tokenService } from '../src/services/auth/tokenService';
import styles from './HomeScreen.module.css';
import nookies from 'nookies';

export default function AuthPageSsr(props) {
    return (
        <div className={styles.div_container}>
            <h1>
                Auth Page SSR-Server Side Render
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    );
};

export async function getServerSideProps(contexto){
    // console.log(tokenService.get())
    const cookies = nookies.get(contexto);
    console.log('Cookies', cookies)
    return {
        props: {
            token: tokenService.get(contexto)
        }
    }
}
