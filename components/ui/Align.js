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
const XInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${props => (props.stack ? 'column' : 'row')};

  justify-content: ${props => (props.placing ? 'space-between' : 'center')};

  /* width: 100%; */
  width: ${props => (props.width ? props.width : '100%')};
`

const Center = ({ children, va, ha, width, stack, placing }) => (
  <Outer>
    <Inner va={va} ha={ha}>
      <XInner stack={stack} placing={placing} width={width}>
        {' '}
        {children}{' '}
      </XInner>
    </Inner>
  </Outer>
)

export default Center
