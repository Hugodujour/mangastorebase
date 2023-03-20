import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
    <link rel="preconnect" href="<https://app.snipcart.com>"/>
    <link rel="preconnect" href="<https://cdn.snipcart.com>"/>
    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
    
      </Head>
      <body>
        <Main />
        <NextScript />
        
        <div hidden id="snipcart" data-api-key="YjkwMDI4MzUtNDE3ZS00MTRkLThhYjYtNmNiNTM4ODIzNmNlNjM4MTQzMDkwMzE2MTUyNzQ5" data-config-modal-style="side"></div>
      </body>
    </Html>
  )
}