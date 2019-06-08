import React from "react"
import styled from "styled-components"

const Styles = styled.div`
  .info {
    height: 140px;
    font-size: 12px;
    display: grid;
    grid-template-columns: 72px 40px 1fr;

    /* filter: url('/media/blur.svg#blur'); */
    /* filter: blur(10px); */
    /* position: relative; */
    /* background: #eeeeee10; */

    z-index: 3;
    /* box-shadow: 0 100px 100px -50px #0000001e, 0 10px 70px 10px #0000001e; */

    .dot {
      /* // background: #000; */
    }
    .todayIcon {
      /* // background: rgb(255, 157, 157); */
    }
    .todayInfo {
      /* // background: red; */
      display: grid;
      place-items: center start;
      /* // margin-top: 40px; */

      .todayInfoWrapper {
        height: 40px;
        width: 100%;
        /* //padding-left: 16px; */
        display: grid;
        grid-template-columns: 3fr 1fr 60px;
        border-bottom: 1px solid #8c4ef870;
        .todayInfoText {
          color: rgba(#eee, 0.3);
          /* color: rgba(#8c4ef8, 0.7); */
          font-weight: 600;
        }
        .todayInfoDate {
          color: #8c4ef8ee;
          justify-self: end;
        }
        .dot {
          /* background: #000; */
        }
      }
    }
  }
`

const InfoHeader = () => (
  <Styles>
    <div className="info">
      <div className="dot" />
      <div className="todayIcon" />
      <div className="todayInfo">
        <div className="todayInfoWrapper">
          <p className="todayInfoText">Today</p>
          <p className="todayInfoDate"> Sunday, April 17, 2019</p>
          <div className="dot" />
        </div>
      </div>
    </div>
  </Styles>
)

export default InfoHeader
