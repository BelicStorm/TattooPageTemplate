import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link
        rel="preload"
        href="/fonts/Athina\ DEMO.otf"
        as="font"
        type="font/opentype"
        crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}