import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  <Head>
  </Head>
  return <>
  <div id="fb-root"></div>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
  <Script async defer src="https://connect.facebook.net/en_US/sdk.js"></Script>
{/* <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0&appId=554330433421576&autoLogAppEvents=1" nonce="6ZlhvR3q"></Script> */}

{/* <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0&appId=554330433421576&autoLogAppEvents=1" nonce="rBPjXMme"></Script> */}
   <Component {...pageProps} />
   </>
}
