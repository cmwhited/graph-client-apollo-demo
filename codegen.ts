import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './.graphclient/schema.graphql',
  documents: ['**/*.tsx', '!gql/**/*'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './gql/': {
      preset: 'client',
      plugins: [],
      config: {
        scalars: {
          BigInt: 'BigInt',
          BigDecimal: 'string',
          Bytes: 'string',
          ANALYTICS__BigDecimal: 'string',
          ANALYTICS__Bytes: 'string',
          BILLING__BigDecimal: 'string',
          BILLING__Bytes: 'string',
          ENS__BigDecimal: 'string',
          ENS__Bytes: 'string',
          NETWORK__BigDecimal: 'string',
          NETWORK__Bytes: 'string',
        },
      },
    },
  },
}

export default config
