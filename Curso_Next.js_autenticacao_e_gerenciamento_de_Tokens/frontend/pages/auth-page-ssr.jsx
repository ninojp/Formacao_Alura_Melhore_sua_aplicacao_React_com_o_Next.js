import styles from './HomeScreen.module.css'

export default function AuthPageSsr(props) {
    return (
        <div className={styles.div_container}>
            <h1>
                Auth Page SSR - Server Side Render
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    );
};
