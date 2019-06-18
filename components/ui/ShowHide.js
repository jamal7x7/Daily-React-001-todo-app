import React from 'react'
import styled, { css } from 'styled-components'

const SH = styled.div`
  ${props =>
    props.hide &&
    css`
      display: none;
    `}
`

const ShowHide = ({ children, hide }) => <SH hide={hide}> {children} </SH>

export default ShowHide
