import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { notoSans } from "@/fonts/fonts";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <meta name="description" content="Рейтинг лучших курсов" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={notoSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
