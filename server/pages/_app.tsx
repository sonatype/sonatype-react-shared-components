import '../styles/globals.css'
import '@sonatype/react-shared-components/react-shared-components.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
