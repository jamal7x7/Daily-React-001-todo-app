import React from 'react'
import styled from 'styled-components'

export default ({ children }) => {
  const TDSideBtn = styled.div`
    /* padding: 0 16px 0 36px; */
    margin: 24px;
  `
  return (
    <TDSideBtn>
      <div>{children}</div>
    </TDSideBtn>
  )
}
