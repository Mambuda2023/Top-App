import type { AppProps } from 'next/app'

import '@/app/styles/globals.css'
import { JSX } from 'react'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />
}
