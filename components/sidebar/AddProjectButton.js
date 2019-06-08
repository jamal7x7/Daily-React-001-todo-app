import React from "react"
import styled from "styled-components"

const Styles = styled.div`
  .addProject {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 52px;

    margin-left: 50px;
    // height: 10px;
    border-top: 1px solid #eeeeee20;
    color: #eeeeee40;
    cursor: pointer;
    /* box-sizing: inside-box; */
    /* background: red; */

    &:hover {
      color: #8c4ef8;
    }

    .addListIcon {
      display: grid;
      place-items: center;
    }
    .addListText {
      display: grid;
      place-items: center start;
      padding-left: 10px;
      font-size: 12px;
      font-weight: bold;
      margin: 0;
    }
  }

  .todoNum {
    grid-area: "TodoNum";
    display: grid;
    place-items: center;
    background: #8c4ef8;
  }
`

const AddProjectButton = ({ handleAddListIsShown }) => (
  <Styles>
    <div className='addProject' onClick={e => handleAddListIsShown(e)}>
      <div className='addListIcon'>
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
          <path
            d='M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z'
            fill='#8c4ef8'
          />
          <rect x='6' y='4' width='2' height='6' rx='1' fill='#062659' />
          <rect
            x='10'
            y='6'
            width='2'
            height='6'
            rx='1'
            transform='rotate(90 10 6)'
            fill='#062659'
          />
        </svg>
      </div>
      <p className='addListText'> Add Project </p>
    </div>
  </Styles>
)
export default AddProjectButton
