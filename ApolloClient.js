import { gql } from 'apollo-boost'

// Pass your GraphQL endpoint to uri

// const client = new ApolloClient({
//   uri: 'http://localhost:4000'
// })

const getUsers = gql`
  query {
    users {
      id
      name
    }
  }
`

client
  .query({
    query: getUsers
  })
  .then(r => {
    console.log(r)
  })
