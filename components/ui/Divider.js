import React from 'react'
import styled, { css } from 'styled-components'

const Line = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${props => (props.height ? props.height : '1px')};

  margin: 4px auto;

  border: none;
  ${props =>
    props.transparent
      ? css`
          background: transparent;
        `
      : css`
          background: ${({ theme }) => theme.colors.text};
        `}
  /* background: ${({ theme }) => theme.colors.text}; */
  /* opacity: 0.05; */
`

const Divider = ({ height, transparnent }) => {
  return (
    <>
      <Line height={height} transparent />
    </>
  )
}

export default Divider
