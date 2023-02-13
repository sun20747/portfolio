import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from "react-redux";
import { StrictMode } from "react";
import store from "../lib/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Provider store={store}>
        <Head>
          <title>Atit Khaoeam</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </StrictMode>
  );
}
