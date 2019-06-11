import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .todoSideBtn {
    padding: 0 16px 0 36px;

    .sideBtn {
      height: 52px;
      border-radius: 8px;
      padding-left: 16px;
      display: grid;
      grid-template-columns: 1fr 28px;
      grid-template-rows: auto;
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors.bgl};
        color: ${({ theme }) => theme.colors.text};
      }
      &:hover .todoListNum {
        // background: $primary2;
        color: ${({ theme }) => theme.colors.text};
      }
      .todoSideBtnLabel {
        display: grid;
        place-items: center start;
        color: ${({ theme }) => theme.colors.textLight};
      }
      &:hover .todoSideBtnLabel {
        color: ${({ theme }) => theme.colors.text};
      }
      .todoSideBtnNum {
        display: grid;
        place-items: center;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.textLight};
      }
    }
  }
`

const SidebarTab = ({ children }) => (
  <Styles>
    <div className='todoSideBtn'>
      <div className='sideBtn'>
        <div className='todoSideBtnLabel'> {children} </div>
        <div className='todoSideBtnNum'>3</div>
      </div>
    </div>
  </Styles>
)

export default SidebarTab
