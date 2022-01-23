import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../config/theme';

const GlobalStyle = createGlobalStyle`  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: none;
    border: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  html {
    font-size: 14px;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-family: poppins, sans-serif;
    font-size: 0.88rem;
    background: ${theme.colors.background};
    user-select: none;
    overflow-x: hidden;
    color: ${theme.colors.dark};
  }
  a{
    color: ${theme.colors.dark};
  }
  img{
    display: block;
    width: 100%;
  }
  h1{
    font-weight: 800;
    font-size: 1.8rem;
  }
  h2{
    font-size: 1.4rem;
  }
  h3{
    font-size: .87rem;
  }
  h4{
    font-size: .8rem;
  }
  h5{
    font-size: .77rem;
  }
  small{
    font-size: .75rem;
  }
  p{
    color: ${theme.colors.darkVariant};
  }
  b{
    color: ${theme.colors.dark};
  }
  .primary{
    color: ${theme.colors.primary}!important;
  }
  .danger{
    color: ${theme.colors.danger}!important;
  }
  .success{
    color: ${theme.colors.success}!important;
  }
  .warning{
    color: ${theme.colors.warning}!important;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
