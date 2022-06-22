import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oveslj178p01xs62w5681s/master',
  cache: new InMemoryCache()
})