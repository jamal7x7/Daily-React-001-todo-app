import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import styled from 'styled-components'

// const client = new ApolloBoost({
//   uri: 'http://localhost:4000'
// })

const getUsers = gql`
  query {
    users {
      id
      name
      email
      password
    }
  }
`

const B = styled.div`
  font-size: 13px;
`

const Client = () => (
  <B>
    <Query query={getUsers}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return data.users.map(({ name, email, password }) => (
          <div key={name}>
            <p>
              {name}: {email}
            </p>
          </div>
        ))
      }}
    </Query>
  </B>
)

export default Client
