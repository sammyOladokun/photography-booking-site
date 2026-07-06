import '../styles/globals.css'
import '../styles/responsive.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Pinyon+Script&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return <Component {...pageProps} />
}
