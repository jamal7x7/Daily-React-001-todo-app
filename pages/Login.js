import { gql } from 'apollo-boost'
import Link from 'next/link'
import { lighten } from 'polished'
import React, { useRef, useState } from 'react'
import { Mutation } from 'react-apollo'
import { animated, useSpring } from 'react-spring'
import styled, { css } from 'styled-components'
import Client from '../components/Client'
import Layout from '../components/Layout'
import { UserInfo } from '../components/sidebar'
import { AvatarSvg, SubmitSvg } from '../components/svg'
import Align from '../components/ui/Align'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import Tab from '../components/ui/Tab'
import Tabs from '../components/ui/Tabs'
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

const Icon = styled.div`
  grid-area: 'addIcon';
  display: grid;
  place-items: center;
  /* background: #000; */
  .active {
    background: #00f;
  }

  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    svg > path {
      fill: ${({ theme }) => lighten(0.05, theme.colors.primary)};
    }
  }
`
const IconFlat = styled.div`
  grid-area: 'addIcon';
  display: grid;
  place-items: center;
  /* background: #000; */
  .active {
    background: #00f;
  }

  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    svg > path {
      fill: ${({ theme }) => lighten(0.1, theme.colors.bgl)};
    }
    svg rect {
      fill: ${({ theme }) => lighten(0.05, theme.colors.bgd)};
      /* fill: ${({ theme }) => lighten(0.05, theme.colors.primary)}; */
    }
  }
`

const Label = styled.p`
  color: ${({ theme }) => theme.colors.textLightBlue};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  margin-bottom: 8px;
  /* padding: 13px 16px; */
  /* margin-bottom: 16px; */
`
const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0px;
  grid-template-rows: 1fr;
  background: #00000000;
  border-radius: 8px;
  margin-bottom: 16px;
  /* padding: 13px 16px; */
  /* margin-bottom: 16px; */
`

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 52px;
  padding: 0 13px;

  border: none;
  background: #00000040;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.primary};
  &:hover :placeholder-shown {
    background: #00000020;
    border-radius: 8px;
  }
`
const InputEmail = styled.input`
  box-sizing: border-box;
  ${props =>
    props.show
      ? css`
          border-radius: 25px;
          background: red;
        `
      : css`
         border-radius: 8px; 
          /* background: ${({ theme }) => theme.colors.bgd}; */
          /* border: 1px solid ${({ theme }) => theme.colors.bgm}; */
        `}
  width: 100%;
  height: 52px;
  padding: 0 13px;

  border: none;
  background: #00000040;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.primary};
  &:hover :placeholder-shown {
    background: #00000020;
    border-radius: 8px;
  }
`

const LOGIN_MUTATION = gql`
  mutation($data: LoginUserInput!) {
    login(data: $data) {
      user {
        id
        email
        name
      }
      token
    }
  }
`

///////////////////////////////////////////COMPONENT//////////////////////////////////////////////

const Login = ({ userSignedin, setUserSignedin }) => {
  const addListRef = useRef()
  const didRun = useRef(false)

  const [addTaskIsShown, setAddTaskIsShown] = useState(false)
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(true)
  const [sidebarTab, setSidebarTab] = useState('LOGIN')

  const [user, setUser] = useState({})

  const handleAddListIsShown = e => {
    setAddListIsShown(prev => !prev)
  }

  const femail = useSpring({
    opacity: !show ? 1 : 1,
    // transform: state
    //   ? "scale(1) translateY(0px) "
    //   : "scale(1) translateY(-10px) ",

    // transformOrigin: 'top',
    transform: show
      ? 'scaleY(1) translateX(0px) translateY(0px) '
      : 'scaleY(1) translateX(0px) translateY(-60px) ',
    // background: show ? '#00000000' : `#073175`,

    config: { mass: 1, tension: 500, friction: 30 }
  })
  const favatar = useSpring({
    opacity: !show ? 1 : 0,
    // transform: state
    //   ? "scale(1) translateY(0px) "
    //   : "scale(1) translateY(-10px) ",

    transformOrigin: 'bottom',
    transform: show
      ? 'scale(1) translateX(0px) translateY(0px) '
      : 'scale(1.6) translateX(0px) translateY(5px) ',
    // background: show ? '#00000000' : `#073175`,

    config: { mass: 1, tension: 500, friction: 30, delay: 3000 }
  })
  const fpassword = useSpring({
    opacity: !show ? 1 : 0,
    // transform: state
    //   ? "scale(1) translateY(0px) "
    //   : "scale(1) translateY(-10px) ",

    transformOrigin: 'top',
    transform: !show
      ? 'scaleY(1) translateX(0px)  translateY(0px)'
      : 'scaleY(1) translateX(-10px) translateY(60px)',

    config: { mass: 1, tension: 500, friction: 30 }
  })

  const flabel = useSpring({
    opacity: show ? 1 : 0,
    // margin: ' 0 auto',
    // transformOrigin: 'top',
    transform: show
      ? 'scaleY(1) translateX(0px) translateY(0px) '
      : 'scaleY(1) translateX(100px) translateY(60px) ',
    //background: show ? '#00000000' : `#073175`,
    borderRadius: '8px',
    config: { mass: 1, tension: 500, friction: 30 }
  })

  const finput = useSpring({
    opacity: !show ? 1 : 1,

    // transformOrigin: 'top',
    // transform: show
    //   ? 'scaleY(1) translateX(0px) translateY(0px) '
    //   : 'scaleY(1) translateX(0px) translateY(4px) ',
    background: show ? '#00000000' : `#073175`,
    width: show ? '100%' : `40%`,
    margin: ' 0 auto',
    borderRadius: !show ? '8px' : '25px',

    config: { mass: 1, tension: 500, friction: 30 }
  })

  const handleTabClick = (e, label) => {
    e.preventDefault()

    setSidebarTab(p => label)
    console.log(sidebarTab + '>>>>>>>>>>>>' + label + '<<<<<<<<<<<<<')

    const el = e.target
    el.classList.add('active')
    console.log(el)
  }
  const handleInputChange = e => {
    e.preventDefault()

    let v = e.target.value
    setUser(p => ({ ...p, email: v }))
    console.log('Email=========>', v)
  }
  const handlePasswordChange = e => {
    e.preventDefault()

    let v = e.target.value
    setUser(p => ({ ...p, password: v }))
    console.log('Password=========>', v)
  }
  const handleSubmitForm = (e, login, data) => {
    e.preventDefault()
    const v = e.target.value
    console.log('helooooooooooo from form', v)

    login({
      variables: {
        data: {
          // email: 'jamal@g.com',
          // password: '01010101'
          email: user.email,
          password: user.password
        }
      }
    })
    e.target.value = ''
  }

  // useEffect(() => {
  //   console.log(sidebarTab)
  // })
  let input

  return (
    <Layout>
      <Client />
      <Styles>
        <div className='wrapper'>
          <div className='sideBar'>
            <div style={{ opacity: 0 }}>
              <UserInfo />
            </div>

            <div className='sidebarMain'>
              <Tabs>
                <Tab
                  label='LOGIN'
                  handleTabClick={handleTabClick}
                  active={sidebarTab === 'LOGIN'}
                />
                <Tab
                  label='SIGNUP'
                  handleTabClick={handleTabClick}
                  active={sidebarTab === 'SIGNUP'}
                />
              </Tabs>

              {/* 
              <SidebarTab>LOGIN</SidebarTab>
              <SidebarTab>SIGNUP</SidebarTab>
              */}
            </div>

            <div style={{ opacity: 0 }}>
              <div className='mode'>Zen</div>
            </div>
          </div>
          {/*/////////////////////////////////////////////////////*/}
          {sidebarTab === 'LOGIN' && (
            <div className='content'>
              <Align ha='center' va='center' width='400px' stack>
                <Mutation mutation={LOGIN_MUTATION}>
                  {(login, { data }) => (
                    <div>
                      <form onSubmit={e => handleSubmitForm(e)}>
                        <animated.div style={femail}>
                          <animated.div style={favatar}>
                            <Align ha='center' va='center'>
                              <AvatarSvg />
                            </Align>
                          </animated.div>
                          <animated.div style={flabel}>
                            <Label> Email </Label>
                          </animated.div>
                          <animated.div style={finput}>
                            <InputEmail
                              autoFocus
                              placeholder='enter your email here'
                              value={user.email}
                              onClick={e => setShow(true)}
                              onChange={e => handleInputChange(e)}
                            />
                          </animated.div>
                          {/*<TextField
                        autoFocus
                        label='Email'
                        placeholder='enter your email here'
                        show={show}
                     />*/}
                          {/*<Divider transparent height='0px' />*/}
                        </animated.div>
                        <Divider transparent height='16px' />

                        {show && (
                          <Align va='center' placing>
                            <Button pad={0.01}>
                              <div>Create an acount</div>
                            </Button>
                            <div style={{ display: 'flex' }}>
                              <Align ha='end' va='center'>
                                <Link href='/Signedin'>
                                  <a>
                                    <SubmitSvg flat />
                                  </a>
                                </Link>

                                <Icon
                                  className='big-svg'
                                  onClick={e => setShow(false)}
                                >
                                  <SubmitSvg next />
                                </Icon>
                              </Align>
                            </div>
                          </Align>
                        )}

                        {!show && (
                          <animated.div style={fpassword}>
                            <ShowHide>
                              <InputEmail
                                autoFocus
                                label='Password'
                                type='password'
                                placeholder='enter your Password here'
                                value={user.password}
                                // onClick={e => setShow(true)}
                                onChange={e => handlePasswordChange(e)}
                              />
                              <Divider transparent height='16px' />
                              <Align va='center' placing>
                                <Button pad={0.01}>
                                  <div>Create an acount</div>
                                </Button>
                                <div style={{ display: 'flex' }}>
                                  <Align ha='end' va='center'>
                                    <IconFlat
                                      className='big-svg-flat'
                                      onClick={e => setShow(true)}
                                    >
                                      <SubmitSvg flat />
                                    </IconFlat>

                                    <Icon
                                      className='big-svg'
                                      onClick={e => {
                                        setShow(true)
                                        handleSubmitForm(e, login, data)
                                      }}
                                    >
                                      <Link href='/Signedin'>
                                        <a>
                                          <SubmitSvg next />
                                        </a>
                                      </Link>
                                    </Icon>
                                  </Align>
                                </div>
                              </Align>
                            </ShowHide>
                          </animated.div>
                        )}
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
                      </form>
                    </div>
                  )}
                </Mutation>
              </Align>
            </div>
          )}
          {/*/////////////////////////////////////////////////////*/}
          {sidebarTab === 'SIGNUP' && (
            <div className='content'>
              <Align ha='center' va='center' width='400px' stack>
                <animated.div style={femail}>
                  <animated.div style={favatar}>
                    <Align ha='center' va='center'>
                      <AvatarSvg />
                    </Align>
                  </animated.div>
                  <animated.div style={flabel}>
                    <Label> Email </Label>
                  </animated.div>
                  <animated.div style={finput}>
                    <InputEmail
                      autoFocus
                      placeholder='enter your email here'
                      onClick={e => setShow(true)}
                    />
                  </animated.div>
                  {/*<TextField
                        autoFocus
                        label='Email'
                        placeholder='enter your email here'
                        show={show}
                     />*/}
                  {/*<Divider transparent height='0px' />*/}
                </animated.div>
                <Divider transparent height='16px' />
                {show && (
                  <Align ha='end' va='center'>
                    <Link href='/Signedin'>
                      <a>
                        {/*<Button>BACK</Button>
                                                <Button primary>NEXT</Button>*/}
                        <SubmitSvg flat />
                      </a>
                    </Link>

                    <Icon className='big-svg' onClick={e => setShow(false)}>
                      <SubmitSvg next />
                    </Icon>
                  </Align>
                )}
                {!show && (
                  <animated.div style={fpassword}>
                    <TextField
                      autoFocus
                      label='Password'
                      type='password'
                      placeholder='enter your Password here'
                    />

                    <Divider transparent height='16px' />
                    {show2 && (
                      <Align va='center' placing>
                        <Button pad={0.01}>
                          <div>Create an acount</div>
                        </Button>
                        <div style={{ display: 'flex' }}>
                          <Align ha='end' va='center'>
                            <IconFlat
                              className='big-svg-flat'
                              onClick={e => setShow(true)}
                            >
                              <SubmitSvg flat />
                            </IconFlat>

                            <Icon
                              className='big-svg'
                              onClick={e => setShow2(false)}
                            >
                              <SubmitSvg next />
                            </Icon>
                          </Align>
                        </div>
                      </Align>
                    )}
                  </animated.div>
                )}
                {!show2 && (
                  <animated.div style={fpassword}>
                    <ShowHide>
                      <TextField
                        autoFocus
                        label='Confirm Password'
                        type='password'
                        placeholder='Retype your Password here'
                      />

                      <Divider transparent height='16px' />
                      <Align va='center' placing>
                        <Button pad={0.01}>
                          <div>Create an acount</div>
                        </Button>
                        <div style={{ display: 'flex' }}>
                          <Align ha='end' va='center'>
                            <IconFlat
                              className='big-svg-flat'
                              onClick={e => setShow(true)}
                            >
                              <SubmitSvg flat />
                            </IconFlat>

                            <Icon
                              className='big-svg'
                              onClick={e => setShow(true)}
                            >
                              <Link href='/Signedin'>
                                <a>
                                  {/*<Button>BACK</Button>
    <Button primary>NEXT</Button>*/}
                                  <SubmitSvg next />
                                </a>
                              </Link>
                            </Icon>
                          </Align>
                        </div>
                      </Align>
                    </ShowHide>
                  </animated.div>
                )}

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
              </Align>
            </div>
          )}
        </div>
      </Styles>
    </Layout>
  )
}

export default Login
