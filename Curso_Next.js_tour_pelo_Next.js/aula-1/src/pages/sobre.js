import Link from "next/link";
import { useRouter } from "next/router";

export default function Sobre() {
    const router = useRouter();
    return (
        <div className="div-container">
            <h1>Página de Sobre!</h1><br />
            <img src="/imgs/nino-img.jpeg" style={{ width: 200, borderRadius: '50%' }} alt="Minha Imagem" />
            <ul>
                <li>
                    <Link href='/'>Link Pg-Home</Link>
                </li>
                <li>
                    <Link href='/posts/*'>Link Pg-Posts</Link>
                </li>
                <li>
                    <Link href={`/posts/${router.query.slug}/comentarios`}>Ir para comentarios</Link>
                </li>
            </ul>
        </div>
    );
};
