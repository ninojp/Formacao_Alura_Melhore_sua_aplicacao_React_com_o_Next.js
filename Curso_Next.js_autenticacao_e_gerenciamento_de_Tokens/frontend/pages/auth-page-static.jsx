import styles from './HomeScreen.module.css'

export default function AuthPageStatic(props) {
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
