import '@styles/globals.scss'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
