import { useState } from 'react'
// import styled from "styled-components"

// const B = styled.div`
/* background: #00000000;
  padding: 20px;
  display: block;
  width: 100px; */
// `

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false)
  const toggle = () => {
    setOn(p => !p)
  }

  return children({
    on: on,
    toggle: toggle
  })
}

export default Toggle
