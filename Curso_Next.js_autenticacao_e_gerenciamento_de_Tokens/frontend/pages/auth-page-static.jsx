import { withSessionHOC } from '../src/services/auth/session';
import styles from './HomeScreen.module.css';

function AuthPageStatic(props) {
    // console.log(session)
    return (
        <div className={styles.div_container}>
            <h1>
                Auth Page Static
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    );
};
export default withSessionHOC(AuthPageStatic);
