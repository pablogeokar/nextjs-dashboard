import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <title>Dashboard</title>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet prefetch" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet prefetch" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='/app.js' />
        </body>
      </Html>
    );
  }
}