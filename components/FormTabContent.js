import React, { useContext } from "react"
import styled from "styled-components"
import { MyProjectsContext } from "./sidebar/ProjectsContext"

const Styles = styled.section`
  .projectListAndForm {
    /* overflow: auto; */

    /* height: 255px; */
    /* width: 170px; */
    /* overflow-x: scroll; */

    .projectList {
      display: inline-flex;
      /* flex-basis: 100px; */
      /* flex-wrap: wrap; */
      padding: 8px;
      .chooseProject {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: 24px;
        /* background-color: red; */

        padding: 4px 16px;
        margin-right: 8px;
        box-sizing: border-box;
        border: 2px solid #07317544;
        border-radius: 20px;
        color: ${({ theme }) => theme.colors.textLight};
        cursor: pointer;

        &:hover {
          color: #ff00f5;
          background: #073175;
        }
        &:hover .projectNum {
          // background: #8c4ef8;
          color: #ff00f5;
        }
        .projectIcon {
          display: grid;
          place-items: center start;
        }
        .projectText {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding-left: 10px;
          font-size: 14px;
          /* overflow-x: auto; */
        }
        .projectNum {
          display: grid;
          place-items: center;
          font-size: 12px;
          color: #eeeeee33;
        }
      }
    }
  }

  input {
    /* box-sizing: border-box; */

    width: 100%;
    border: 0 solid #073175;
    background: #00000000;
    color: ${({ theme }) => theme.colors.textLight};
    // font-size: 16px;
    outline: none;
    // margin-bottom: 16px;
  }

  .projectListForm {
    display: grid;
    grid-template-columns: auto 140px;
    grid-template-rows: auto;

    padding-left: 50px;
    height: 52px;
    margin-top: -10px;
    color: rgba($text, 0.5);
    cursor: pointer;

    &:hover {
      color: #ff00f5;
      background: #00000020;
    }
    &:hover .projectNum {
      // background: $primary2;
      color: #ff00f5;
    }
    .projectIcon {
      display: grid;
      place-items: center;
    }
    .projectText {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme.colors.textLight};

      padding-left: 10px;
      font-size: 14px;
      form {
        input {
          font-size: 14px;
          color: #ff00f5;
        }
      }
    }
    /* .projectNum {
      display: grid;
      place-items: center;
      font-size: 12px;
      color: #eeeeee33;
    } */
  }
`

const FormTabContent = ({ tab }) => {
  const { projects, projectDispatch } = useContext(MyProjectsContext)

  console.log("========================>", tab.name)
  return (
    <Styles>
      <div className="projectListAndForm">
        {tab.name === "projectTab" &&
          projects.map(p => (
            <div className="projectList">
              <div className="chooseProject">
                <div className="projectIcon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z"
                      fill="#FF00F5"
                    />
                  </svg>
                </div>
                <div className="projectText">
                  {" "}
                  <p> {p.projectName} </p>
                </div>
              </div>
            </div>
          ))}
        {tab.name === "priorityTab" && (
          <div className="projectList">Priority</div>
        )}
        {tab.name === "datePickerTab" && (
          <div className="projectList">Date Picker</div>
        )}
      </div>
    </Styles>
  )
}

export default FormTabContent
