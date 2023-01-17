import { ApolloLink, Observable } from '@apollo/client'
import { isAsyncIterable } from '@graphql-tools/utils'
import { getOperationAST } from 'graphql'

const ROOT_VALUE = {}
function createMeshApolloRequestHandler(options: any) {
  return function meshApolloRequestHandler(operation: any) {
    const operationAst = getOperationAST(operation.query, operation.operationName)
    if (!operationAst) {
      throw new Error('GraphQL operation not found')
    }
    const operationFn = operationAst.operation === 'subscription' ? options.subscribe : options.execute
    return new Observable((observer) => {
      Promise.resolve()
        .then(async () => {
          const results = await operationFn(
            operation.query,
            operation.variables,
            operation.getContext(),
            ROOT_VALUE,
            operation.operationName
          )
          if (isAsyncIterable(results)) {
            for await (const result of results) {
              if (observer.closed) {
                return
              }
              observer.next(result)
            }
            observer.complete()
          } else {
            if (!observer.closed) {
              observer.next(results)
              observer.complete()
            }
          }
        })
        .catch((error) => {
          if (!observer.closed) {
            observer.error(error)
          }
        })
    })
  }
}
/**
 * Note: this is a hack to solve an issue with the differences between @apollo/client ApolloLink and the GraphQL Mesh ApolloLink.
 * Once The Guild team resolves this issue with their @graphprotocol/client-apollo lib, this can be removed.
 */
export class GraphClientLink extends ApolloLink {
  constructor(options: any) {
    super(createMeshApolloRequestHandler(options) as any)
  }
}
