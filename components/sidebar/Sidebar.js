import React from 'react'
import styled from 'styled-components'
import Tab from '../ui/Tab'
import Tabs from '../ui/Tabs'
import ProjectList from './ProjectList'
import UserInfo from './UserInfo'

const Styles = styled.div`
  min-height: 100%;
  overflow: visible;

  .sideBar {
    grid-area: 'sideBar';
    background: ${({ theme }) => theme.colors.sideBar};
    border-radius: 4px 0 0 4px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 160px 1fr 52px;
    /* resize: horizontal; */
    overflow: auto;
    z-index: 2000;
  }
  .sidebarMain {
    /* background: #00f; */
    overflow: scroll;
  }
  .mode {
    /* background: #000; */
    z-index: 10;
    border-top: 1px solid #eeeeee20;
    display: grid;
    place-items: center start;
    padding-left: 52px;
  }
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

  .sideBarList {
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto 30px 170px auto;
    align-content: start;
    grid-gap: 10px;
    // height: 100%;
  }

  .projects {
    padding-left: 50px;
    height: 52px;
    display: grid;
    place-items: center start;
  }
`

const Sidebar = ({
  addListIsShown,
  handleAddListIsShown,
  addListRef,
  projects,
  userSignedin,
  setUserSignedin
}) => (
  <Styles>
    <div className='sideBar'>
      <UserInfo />

      <div className='sidebarMain'>
        <Tabs>
          <Tab label='TODOS' />
          <Tab label='CALENDAR' />
        </Tabs>

        <div className='projects'> LISTS </div>

        <ProjectList
          addListIsShown={addListIsShown}
          handleAddListIsShown={handleAddListIsShown}
          // handleAddList={handleAddList}
          // handleDeleteList={handleDeleteList}
          addListRef={addListRef}
          projects={projects}
        />
      </div>

      <div className='mode'>ZEN</div>
    </div>
  </Styles>
)

export default Sidebar
