import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'

const TodoSideBtn = styled.div`
  padding: 0;
  margin-bottom: 8px;
`
const SideBtnLabel = styled.div`
  display: grid;
  padding-left: 16px;
  place-items: center start;
  /* font-size: ${({ theme }) => theme.fontSizes[0]}; */
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textLight};
}
&:hover .todoSideBtnLabel {
  color: ${({ theme }) => theme.colors.text};
}
`
const Icon = styled.div`
  display: grid;
  place-items: center;
  border-radius: 8px;

  background: ${({ theme }) => rgba(theme.colors.primary, 0.2)};
`
const TodoSideBtnNum = styled.div`
  display: grid;
  place-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`
const SideBtn = styled.div`
  height: 52px;
  border-radius: 8px;
  /* padding-left: 16px; */
  display: grid;
  grid-template-columns: 52px 1fr 28px;
  grid-template-rows: auto;
  background: ${props =>
    props.active ? ({ theme }) => theme.colors.bgl : '00000000'};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => rgba(theme.colors.bgl, 0.7)};
    color: ${({ theme }) => theme.colors.text};
  }
  &:hover .todoListNum {
    // background: $primary2;
    color: ${({ theme }) => theme.colors.text};
  }
`

const SidebarTab = ({
  children,
  num,
  label,
  index,
  active,
  handleTabClick
}) => (
  <TodoSideBtn onClick={e => handleTabClick(e, label)}>
    <SideBtn active={active}>
      <Icon>||</Icon>
      <SideBtnLabel>
        {' '}
        <div>{label}</div>
      </SideBtnLabel>

      {num && <TodoSideBtnNum>3</TodoSideBtnNum>}
    </SideBtn>
  </TodoSideBtn>
)

export default SidebarTab
