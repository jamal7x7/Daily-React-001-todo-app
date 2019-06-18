import Link from 'next/link'
import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { AvatarSvg, UserSettingsMenuSvg } from '../svg'
import DropMenu from '../ui/DropMenu'

const Styles = styled.div`
  .dropMenuPosition {
    /* background: #00f; */

    /* width: 100%; */
    left: calc(50% - 100px);
    /* left: 35px; */
    top: 0px;
    position: absolute;
    z-index: 100000000;
  }
  .userCardWrapper {
    display: grid;
    /* padding-left: 50px; */
    place-items: center;
    height: 100%;
  }
  .userCard {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    /* padding-left: 50px; */
    height: 70px;

    .userCardAvatar {
      margin-bottom: 4px;
      display: grid;
      place-items: center;
    }
    .userCardName {
      margin-top: 4px;
      /* display: flex;
      justify-content: center;
      align-items: start; */
      cursor: pointer;

      /* place-items: start center; */

      /* padding-left: 16px; */
      /* background: #f00; */
    }

    .userCardNameBtn {
      /* background: #000; */
      padding: 5px 24px;
      border-radius: 8px;
      &:hover {
        background: ${({ theme }) => theme.colors.bgl};
      }
    }
    .userCardNameText {
      display: inline;
    }

    .userSettingsMenu {
      padding-left: 8px;
      display: inline;
    }
  }
  .options-dropdown {
    /* position: relative; */
    /* display: inline-block; */
    /* z-index: 200; */
  }
`

const UserInfo = () => {
  const [showMenu, setShowMenu] = useState(false)

  const sp = useSpring({
    // opacity: showMenu ? 1 : 0,
    // transform: showMenu ? 'scale(1)' : 'scale(0.8)',
    // // from: { opacity: 0 },
    // // color: !optionsMenuIsShown ? "tomato" : "#8c4ef8",

    // // config: { duration: 150 },
    // config: { mass: 1, tension: 500, friction: 30 }

    opacity: showMenu ? 1 : 0,
    // transform: state
    //   ? "scale(1) translateY(0px) "
    //   : "scale(1) translateY(-10px) ",

    transformOrigin: 'top',
    transform: showMenu
      ? 'scaleY(1) translateY(0px)  '
      : 'scaleY(0.9) translateY(-20px) ',

    config: { mass: 1, tension: 500, friction: 30, clamp: false }
    // delay: 150
  })

  return (
    <Styles>
      <div className='userCardWrapper'>
        <div className='userCard'>
          <div className='userCardAvatar'>
            <AvatarSvg />
          </div>
          <div className='userCardName'>
            <div
              className='userCardNameBtn'
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className='userCardNameText '>Jamal</div>
              <div className='userSettingsMenu'>
                <UserSettingsMenuSvg />
              </div>
            </div>
          </div>
          {showMenu && (
            <animated.div style={sp} className='options-dropdown'>
              <div className='dropMenuPosition'>
                <DropMenu showMenu={showMenu}>
                  <Link href='/Login'>
                    <div className='options-content-text'>
                      <p> || </p>
                      <p>Logout</p>
                    </div>
                  </Link>

                  <div className='options-content-text'>
                    <p> || </p>
                    <p>Settings</p>
                  </div>
                </DropMenu>
              </div>
            </animated.div>
          )}
        </div>
      </div>
    </Styles>
  )
}
export default UserInfo
