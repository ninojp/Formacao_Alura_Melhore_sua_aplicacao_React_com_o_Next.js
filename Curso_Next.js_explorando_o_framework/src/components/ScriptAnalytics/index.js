import Head from "next/head";

export default function ScriptAnalytics() {
    return (
        <Head>
            {/* <!-- Global site tag (gtag.js) - Google Analytics -->
                    A propriedade dangerouslySetInnerHTML={{ __html: ` código javaScript... ` }}
                    foi necessária pois aqui o Script deve ser inline e o original NÃO É.
                    e será lido como se fosse inserido dentro de um codigo HTML normal */}
            <script dangerouslySetInnerHTML={{ __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-2ALEATORIOK'); `
            }} />
        </Head>
    );
};
