import Link from 'next/link'
import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'
import { SidebarTab, UserInfo } from '../components/sidebar'
import { SubmitSvg } from '../components/svg'
import Align from '../components/ui/Align'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import TextField from '../components/ui/TextField'

const ShowHide = styled.div`
  ${props =>
    props.hide &&
    css`
      display: none;
    `}
`

const Styles = styled.div`
  height: 100%;

  .wrapper {
    width: 100%;
    height: 100%;

    border-radius: 4px;

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
            <Align ha='center' va='center'>
              <div style={{ width: '500px' }}>
                <ShowHide>
                  <TextField
                    autoFocus
                    label='Email'
                    placeholder='enter your email here'
                  />
                  <Divider transparent height='16px' />
                  <Align ha='center' va='center'>
                    <SubmitSvg next />
                    <Link href='/Signedin'>
                      <a>
                        {/*<Button>BACK</Button>
                        <Button primary>NEXT</Button>*/}
                        <SubmitSvg flat />
                      </a>
                    </Link>
                  </Align>
                </ShowHide>
                <Divider transparent />
                <ShowHide hide>
                  <TextField
                    autoFocus
                    label='Password'
                    placeholder='enter your Password here'
                  />
                  <Divider />

                  <Link href='/Signedin'>
                    <a>
                      <Button primary>LOGIN</Button>
                      <Button>CANCEL</Button>
                    </a>
                  </Link>
                </ShowHide>
              </div>
            </Align>
          </div>
        </div>
      </Styles>
    </Layout>
  )
}

export default Login
