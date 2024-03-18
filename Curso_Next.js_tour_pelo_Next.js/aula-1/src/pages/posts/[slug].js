import Link from "next/link";
import { useRouter } from "next/router";

export default function Post(){
    const router = useRouter();
    console.log(router)

    return(
        <div className="div-container">
            <h1>Página de Posts!</h1><br/>
            <p>Slug da Página atual: {router.query.slug}</p>
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
