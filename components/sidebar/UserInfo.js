import React from "react"
import styled from "styled-components"

const Styles = styled.div`
  .userCard {
    display: grid;
    grid-template-columns: 50px 1fr;
    padding-left: 50px;
    height: 100%;
    .userCardAvatar {
      display: grid;
      place-items: center;
    }
    .userCardName {
      display: grid;
      place-items: center start;
      padding-left: 16px;
    }
  }
`

const UserInfo = () => (
  <Styles>
    <div className="userCard">
      <div className="userCardAvatar">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path
            d="M17 2.3094C19.4752 0.880339 22.5248 0.880339 25 2.3094L35.1865 8.1906C37.6617 9.61966 39.1865 12.2607 39.1865 15.1188V26.8812C39.1865 29.7393 37.6617 32.3803 35.1865 33.8094L25 39.6906C22.5248 41.1197 19.4752 41.1197 17 39.6906L6.81347 33.8094C4.33826 32.3803 2.81347 29.7393 2.81347 26.8812V15.1188C2.81347 12.2607 4.33826 9.61966 6.81347 8.1906L17 2.3094Z"
            fill="#885FFF"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="7"
            y="7"
            width="28"
            height="32"
          >
            <path
              d="M24.5 22.1754L30.3564 25.5566C32.5222 26.8071 33.8564 29.1179 33.8564 31.6188V35C33.8564 36.1663 32.9555 37.1346 31.7922 37.2185L21.5039 37.961C21.1684 37.9852 20.8316 37.9852 20.4961 37.961L10.2078 37.2185C9.04448 37.1346 8.14359 36.1663 8.14359 35V31.6188C8.14359 29.1179 9.47778 26.8071 11.6436 25.5566L17.5 22.1754C19.6658 20.925 22.3342 20.925 24.5 22.1754Z"
              fill="#2C2B2B"
              stroke="#885FFF"
              stroke-width="2"
            />
            <path
              d="M17.6029 9.11603C19.705 7.90235 22.295 7.90235 24.3971 9.11603C26.4993 10.3297 27.7942 12.5727 27.7942 15C27.7942 17.4273 26.4993 19.6703 24.3971 20.884C22.295 22.0976 19.705 22.0976 17.6029 20.884C15.5007 19.6703 14.2058 17.4273 14.2058 15C14.2058 12.5727 15.5007 10.3297 17.6029 9.11603Z"
              fill="#2C2B2B"
              stroke="#885FFF"
              stroke-width="2"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M17.5 3.17543C19.6658 1.925 22.3342 1.925 24.5 3.17543L34.6865 9.05662C36.8523 10.3071 38.1865 12.6179 38.1865 15.1188V26.8812C38.1865 29.3821 36.8523 31.6929 34.6865 32.9434L24.5 38.8246C22.3342 40.075 19.6658 40.075 17.5 38.8246L7.31347 32.9434C5.14766 31.6929 3.81347 29.3821 3.81347 26.8812V15.1188C3.81347 12.6179 5.14766 10.3071 7.31347 9.05662L17.5 3.17543Z"
              fill="#2C2B2B"
              stroke="#885FFF"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
      <div className="userCardName">Jamal</div>
    </div>
  </Styles>
)

export default UserInfo
