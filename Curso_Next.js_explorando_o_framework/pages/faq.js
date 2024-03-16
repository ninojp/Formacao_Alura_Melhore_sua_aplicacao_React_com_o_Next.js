// import { useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "../src/components/NextLink";

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

export async function getServerSideProps() {
    console.log('Roda a cada acesso que vc recebe(dinamic, recomendado da sites com bastante conteudo dinâmico)')
    console.log('Em modo DEV, sempre Roda a cada acesso que vc recebe')
// export async function getStaticProps() {
//     console.log('Roda SOMENTE em build time(static), não vai mudar até fazer um novo build')
//     console.log('Em modo DEV, sempre Roda a cada acesso que vc recebe')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then(respostaServer => {
            return respostaServer.json();
        }).then((resposta) => {
            return resposta;
        })
    return {
        props: {
            qualquerCoisa: "Que eu passar aqui!",
            faq
        }
    }
};

export default function FAQPage({ faq }) {
    console.log({ faq })
    // const [faq, setFaq] = useState([]);
    // useEffect(() => {
    //     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    //     fetch(FAQ_API_URL).then(respostaServer => {
    //         return respostaServer.json();
    //     }).then(resposta => {
    //         setFaq(resposta);
    //         // console.log(resposta)
    //     })
    // }, []);
    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases</title>
            </Head>
            <h1>Alura Cases - Página de Perguntas</h1>
            <NextLink href="/">Ir para Home</NextLink>
            <div>
                <ul>
                    {faq.map(({ question, answer }) => (
                        <li key={question}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
