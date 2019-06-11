import Link from 'next/link'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { SidebarTab, UserInfo } from '../components/sidebar'

const Styles = styled.div`
  height: 100%;

  .wrapper {
    width: 100%;
    height: 100%;

    // padding: 20px;
    // border: 1px solid rgba(#fff, 0.08);
    border-radius: 4px;
    // background-color: $bgm;
    // border: 1px solid $bgl;
    // box-shadow: 0 90px 100px -50px rgba(black, 0.4),
    //   0 50px 70px 10px rgba(black, 0.1);
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ' sideBar  content ';
  }

  // * /////////////////////////////////////////////SIDE-BAR/////////////////////////////////////////////// * //

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
  .sideBar {
    grid-area: 'sideBar';
    height: 100%;
    background: ${({ theme }) => theme.colors.sideBar};
    border-radius: 4px 0 0 4px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 160px 1fr 52px;
    /* resize: horizontal; */
    overflow: auto;
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
  // * ///////////////////////////////////////CONTENT///////////////////////////////////// * //

  .content {
    grid-area: 'content';
    background: ${({ theme }) => theme.colors.bgd};

    overflow-anchor: none;
    border-radius: 0 4px 4px 0;
  }

  .anchor {
    overflow-anchor: auto;
    height: 1px;
  }
`

const Login = ({ userSignedin, setUserSignedin }) => {
  const addListRef = useRef()
  const didRun = useRef(false)

  const [addTaskIsShown, setAddTaskIsShown] = useState(false)

  const handleAddListIsShown = e => {
    setAddListIsShown(prev => !prev)
  }

  return (
    <Layout>
      <Styles>
        <div className='wrapper'>
          <div className='sideBar'>
            <UserInfo />

            <div className='sidebarMain'>
              <SidebarTab>LOGIN</SidebarTab>
              <SidebarTab>SIGNUP</SidebarTab>
            </div>

            <div className='mode'>Zen</div>
          </div>

          <div className='content'>
            <Link href='/Signedin'>
              <a>Signin</a>
            </Link>
          </div>
        </div>
      </Styles>
    </Layout>
  )
}

export default Login
