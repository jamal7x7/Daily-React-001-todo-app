import React from 'react'
import styled, { css } from 'styled-components'

const B = styled.div`
  font-size: ${({ theme }) => theme.size.s}; 
  font-weight: ${({ theme }) => theme.fontWeights.bold}; 
  padding: 0 3rem;
  /* margin-right: 1rem; */
  display: inline-block;
  line-height: 44px;
  
  background: ${props =>
    props.primary ? ({ theme }) => theme.colors.bgm : '#00000000'};
  color: ${({ theme }) => theme.colors.textLight};
  ${props =>
    props.primary
      ? css`
          background: ${({ theme }) => theme.colors.bgm};
          border: 1px solid ${({ theme }) => theme.colors.bgm};
        `
      : css`
          /* background: ${({ theme }) => theme.colors.bgd}; */
          /* border: 1px solid ${({ theme }) => theme.colors.bgm}; */
        `} 
  border-radius: ${({ theme }) => theme.colors.radius};
  &:hover {
  background: ${props =>
    props.primary ? ({ theme }) => theme.colors.bgl : '#00000000'};
    color: ${({ theme }) => theme.colors.text};
  }
`

const Button = ({ children, va, ha, primary }) => (
  <B va={va} ha={ha} primary={primary}>
    {' '}
    {children}{' '}
  </B>
)

export default Button
