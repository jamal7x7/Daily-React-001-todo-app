import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  /* place-items: center center; */
`
const Inner = styled.div`
  justify-content: ${props => props.ha};
  align-items: ${props => props.va};
  /* border-radius: 8px; */
  display: grid;
  /* grid-template-columns: auto;
      grid-template-rows: auto; */
  /* place-items: center center; */

  /* height: 100px; */
  width: 100%;
  /* cursor: pointer; */
`

const Center = ({ children, va, ha, stack }) => (
  <Outer>
    <Inner va={va} ha={ha} stack={stack}>
      {' '}
      {children}{' '}
    </Inner>
  </Outer>
)

export default Center
