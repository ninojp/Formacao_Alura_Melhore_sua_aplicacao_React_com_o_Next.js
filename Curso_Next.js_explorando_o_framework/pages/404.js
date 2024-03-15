import LinkEstilizado from "../src/components/LinkEstilizado";
import NextLink from "../src/components/NextLink";

export default function Page404({...props}) {
    return(
        <div>
            <h1>Você se perdeu e caiu na página 404 :o </h1>
            <NextLink href="/">Voltar para Home</NextLink><br/>
            <LinkEstilizado {...props} href='/faq'>Ir para Página FAQ</LinkEstilizado>
        </div>
    );
};
