import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const M = styled.div`
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 0 ${props => (props.pad ? props.pad : 3)}rem;
`

const Modal = ({ children }) =>
  ReactDOM.createPortal(<div>{children}</div>, document.body)

export default Modal
