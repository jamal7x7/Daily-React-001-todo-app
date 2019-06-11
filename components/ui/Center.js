import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .outer {
    padding: 16px;

    .inner {
      border-radius: 8px;
      display: grid;
      /* grid-template-columns: auto;
      grid-template-rows: auto; */
      place-items: center center;

      height: 100%;
      width: 100%;
      /* cursor: pointer; */
      &:hover {
        background: ${({ theme }) => theme.colors.bgl};
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`

const Center = ({ children }) => (
  <Styles>
    <div className='outer'>
      <div className='inner'> {children} </div>
    </div>
  </Styles>
)

export default Center
