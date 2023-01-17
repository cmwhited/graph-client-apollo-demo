import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import { AppProps } from 'next/app'
import { useRef } from 'react'

import '@/styles/globals.css'

import { buildApolloClient } from '../graphql-client'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useRef<ApolloClient<NormalizedCacheObject> | undefined>()
  if (!apolloClient.current) {
    apolloClient.current = buildApolloClient()
  }

  return (
    <ApolloProvider client={apolloClient.current}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
