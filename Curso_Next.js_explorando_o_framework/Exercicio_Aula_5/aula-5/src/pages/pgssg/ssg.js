import Link from "next/link";

function SSGPage({ mensagem }) {
    return (
        <div className='minha_div'>
            <h1>Página SSG - Static Site Generation</h1>
            {mensagem}
            <ul>
                <li><Link href='/pgssr/ssr'>Link Página SSR</Link></li>
                <li><Link href='/'>Home Page</Link></li>
            </ul>
        </div>
    );
}
function delay(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}
export const getStaticProps = async () => {
    await delay(1);
    return {
        props: {
            mensagem: 'Fui gerado no build',
        },
    };
};
export default SSGPage;
//=========================================================================
// import Link from "next/link";
// export async function getStaticProps(){
//     const msgStaticBuilde='Fui gerada durante o build!';
//     return msgStaticBuilde;
// };
// export default function Ssg() {
//     return (
//         <div className='minha_div'>
//             <h1>Página SSG - Static Site Generation</h1>
//             {/* <h2>{msgStaticBuilde}</h2> */}
//             <ul>
//                 <li><Link href='/pgssr/ssr'>Link Página SSR</Link></li>
//                 <li><Link href='/'>Home Page</Link></li>
//             </ul>
//         </div>
//     );
// };
