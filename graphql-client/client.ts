import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

import { execute, subscribe } from '../.graphclient'

import { GraphClientLink } from './link'

let client: ApolloClient<NormalizedCacheObject> | null = null

export default function buildApolloClient(createNew?: boolean): ApolloClient<NormalizedCacheObject> {
  if (client == null || createNew) {
    client = new ApolloClient({
      ssrMode: false,
      link: new GraphClientLink({ execute, subscribe }),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
        query: {
          fetchPolicy: 'cache-first',
          errorPolicy: 'all',
        },
      },
    })
  }

  return client
}
