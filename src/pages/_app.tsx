import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import InitMap from './map'

export default function App({ Component, pageProps }: AppProps) {
  
  
  return <div >
  <div id="fb-root"></div>
{/* <Script src="https://apis.google.com/js/platform.js" async defer></Script> */}
  <Script src="https://accounts.google.com/gsi/client" async defer></Script>
  {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script> */}
  <Script async defer src="https://connect.facebook.net/en_US/sdk.js"></Script>
  <Component {...pageProps} />
   </div>
}
