import Link from "next/link";

export default function Sobre(){
    return(
        <div className="div-container">
            <h1>Página de Sobre!</h1><br/>
            <img src="/imgs/nino-img.jpeg" style={{width: 200, borderRadius: '50%'}} alt="Minha Imagem" />
            <ul>
                <li>
                    <Link href='/'>Link Pg-Home</Link>
                </li>
                <li>
                    <Link href='/sobre'>Link Pg-Sobre</Link>
                </li>
                <li>
                    <Link href='/posts/*'>Link Pg-Posts</Link>
                </li>
            </ul>
        </div>
    );
};
