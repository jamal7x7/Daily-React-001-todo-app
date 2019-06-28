import ApolloClient from 'apollo-boost'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
})

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
)

render(ApolloApp(App), document.getElementById('root'))
