import { lighten } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'

const B = styled.div`
  font-size: ${({ theme }) => theme.size.s}; 
  font-weight: ${({ theme }) => theme.fontWeights.bold}; 
  padding: 0 ${props => (props.pad ? props.pad : 3)}rem;
  /* margin-right: 1rem; */
  display: inline-block;
  line-height: 44px;
  cursor: pointer;
  
  background: ${props =>
    props.primary ? ({ theme }) => theme.colors.bgm : '#00000000'};
 color: ${props =>
   props.primary
     ? ({ theme }) => theme.colors.textLight
     : ({ theme }) => theme.colors.primary};
  }
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
  color: ${props =>
    props.primary
      ? ({ theme }) => theme.colors.text
      : ({ theme }) => lighten(0.05, theme.colors.primary)};
  }
  
`

const Button = ({ children, va, ha, primary, pad }) => (
  <B va={va} ha={ha} primary={primary} pad={pad}>
    {' '}
    {children}{' '}
  </B>
)

export default Button
