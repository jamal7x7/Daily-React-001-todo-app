import React, { useState } from 'react'
import Login from './Login'
import Signedin from './Signedin'

const Index = () => {
  const [userSignedin, setUserSignedin] = useState(false)

  return (
    <>
      {userSignedin ? (
        <Signedin
          userSignedin={userSignedin}
          setUserSignedin={setUserSignedin}
        />
      ) : (
        <Login userSignedin={userSignedin} setUserSignedin={setUserSignedin} />
      )}
    </>
  )
}

export default Index
