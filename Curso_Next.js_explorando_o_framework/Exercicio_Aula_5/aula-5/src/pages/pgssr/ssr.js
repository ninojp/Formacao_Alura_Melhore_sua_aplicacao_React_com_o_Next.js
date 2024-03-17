import Link from "next/link";

function SSRPage({ msg }) {
    return (
        <div className='minha_div'>
            <h1>Página SSR - Server Side Rendering</h1>
            <h2>{msg}</h2>
            <ul>
                <li><Link href='/pgssg/ssg'>Link Página SSG</Link></li>
                <li><Link href='/'>Home Page</Link></li>
            </ul>
        </div>
    );
}
const delay = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}
export const getServerSideProps = async () => {
    await delay(1);
    return {
        props: {
            msg: 'Fui gerada pra essa requisição!',
        },
    }
};
export default SSRPage;
//=============================================================================
// export async function getServerSideProps(){
//     const msgServerSide='Fui renderizada para esta requisição!';
//     delay(2);
//     return msgServerSide;
// }
// export default function Ssr() {
// return (
//     <div className='minha_div'>
//         <h1>Página SSR - Server Side Rendering</h1>
//         {/* <h2>{msgServerSide}</h2> */}
//         <ul>
//             <li><Link href='/pgssg/ssg'>Link Página SSG</Link></li>
//             <li><Link href='/'>Home Page</Link></li>
//         </ul>
//     </div>
// );
// };
