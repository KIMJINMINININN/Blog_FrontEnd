import App, { AppContext, AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { wrapper } from "../store";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      {/* <div id="root-modal" /> */}
    </>
  );
};

