import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Image from 'next/image'


import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}
