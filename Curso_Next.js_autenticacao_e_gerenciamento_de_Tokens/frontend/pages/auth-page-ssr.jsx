import { withSession } from '../src/services/auth/session';
import styles from './HomeScreen.module.css';
// import { tokenService } from '../src/services/auth/tokenService';
// import { authService } from '../src/services/auth/authService';
// import nookies from 'nookies';
function AuthPageSsr(props) {
    return (
        <div className={styles.div_container}>
            <h1>
                Auth Page SSR-Server Side Render
            </h1>
            <p>
                <a href='/logout'>Logout</a>
            </p>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    );
};
export default AuthPageSsr;
// Para todas as páginas que precisarem de autentificação (Decorator Patern)
export const getServerSideProps = withSession((ctx) => {
    return {
        props: {
            session: ctx.req.session
        }
    }
});

// Código feito primeiro... durante a aula
// export async function getServerSideProps(ctx) {
//     try {
//         const session = await authService.getSession(ctx);
//         // const cookies = nookies.get(contexto);
//         // console.log('Cookies', cookies);
//         // const token = tokenService.get(contexto);
//         // console.log(token)
//         return {
//             props: {
//                 // token: tokenService.get(contexto)
//                 session,
//             }
//         }
//     }catch(erro){
//         return{
//             redirect: {
//                 permanent: false,
//                 destination: '/?error=404'
//             }
//         }
//     }
// };
