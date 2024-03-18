import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            Texto (Página _app.js) será exibido em todas as Páginas
            <Component {...pageProps} />
        </>
    );
}
