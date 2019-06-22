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
        background: ${props =>
          props.active ? ({ theme }) => theme.colors.bgl : '00000000'};
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors.bgl} ;
        color: ${({ theme }) => theme.colors.text};
      }
      &:hover .todoListNum {
        // background: $primary2;
        color: ${({ theme }) => theme.colors.text};
      }
      .todoSideBtnLabel {
        display: grid;
        place-items: center start;
        /* font-size: ${({ theme }) => theme.fontSizes[0]}; */
        font-size: 14px;
        color: ${({ theme }) => theme.colors.textLight};
      }
      &:hover .todoSideBtnLabel {
        color: ${({ theme }) => theme.colors.text};
      }
     
    }
  }
`
const TodoSideBtnNum = styled.div`
  display: grid;
  place-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`

const SidebarTab = ({ children, num }) => (
  <Styles>
    <div className='todoSideBtn'>
      <div className='sideBtn'>
        <div className='todoSideBtnLabel'> {children} </div>
        {num && <TodoSideBtnNum>3</TodoSideBtnNum>}
      </div>
    </div>
  </Styles>
)

export default SidebarTab
