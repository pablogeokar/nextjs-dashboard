import { AppProps } from 'next/app';
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../config/theme';


const GlobalStyle = createGlobalStyle``


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&family=Ubuntu:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="theme-color" content="#1d262d" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
