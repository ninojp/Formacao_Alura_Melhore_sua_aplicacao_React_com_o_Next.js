import Head from "next/head";
import GlobalStyle from "../src/theme/GlobalStyle";
import HeadFonts from "../src/components/HeadFonts";
import ScriptAnalytics from "../src/components/ScriptAnalytics";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <HeadFonts />
            <ScriptAnalytics />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
};
