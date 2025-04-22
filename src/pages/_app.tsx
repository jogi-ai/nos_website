import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5SREHPDN1E"></Script>
      <Script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5SREHPDN1E', { debug_mode: ${process.env.NEXT_PUBLIC_ENV=="production"?"false":"true"} });
      `}}>
      </Script>
      <Component {...pageProps} />
    </>
  )
}