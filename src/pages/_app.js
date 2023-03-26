import '@styles/globals.scss'
import Script from 'next/script';
import CookieConsent from "react-cookie-consent";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      <Component {...pageProps} />
      <CookieConsent>Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur.</CookieConsent>

    </>
  );
}

export default MyApp
