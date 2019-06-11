import React, { useContext } from 'react'
import styled from 'styled-components'
import AddProjectButton from './AddProjectButton'
import { MyProjectsContext } from './ProjectsContext'

const Styles = styled.section`
  .projectListAndForm {
    overflow-x: scroll;

    height: 250px;
    // margin-top: -10px;

    .projectList {
      display: grid;
      grid-template-columns: auto 1fr 28px;
      grid-template-rows: auto;

      padding-left: 50px;
      height: 52px;
      color: ${({ theme }) => theme.colors.textLight};
      cursor: pointer;

      &:hover {
        color: #ff00f5;
        background: #00000020;
      }
      &:hover .projectNum {
        // background: #8c4ef8;
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

        padding-left: 10px;
        font-size: 14px;
        overflow-x: auto;
      }
      .projectNum {
        display: grid;
        place-items: center;
        font-size: 12px;
        color: #eeeeee33;
      }
    }
  }

  input {
    box-sizing: border-box;

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
    grid-template-columns: auto 1fr 28px;
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
    .projectNum {
      display: grid;
      place-items: center;
      font-size: 12px;
      color: #eeeeee33;
    }
  }
`

const ProjectList = ({
  addListIsShown,
  addListRef,
  // projects,
  // handleAddList,
  // handleDeleteList,
  handleAddListIsShown
}) => {
  const { projects, projectDispatch } = useContext(MyProjectsContext)

  const handleAddList = e => {
    e.preventDefault()

    const text = addListRef.current.value
    if (text) {
      projectDispatch({
        type: 'ADD_LIST',
        id: Date.now(),
        projectName: text
      })
    }

    addListRef.current.value = ''
  }

  const handleDeleteList = (e, id) => {
    e.preventDefault()

    projectDispatch({
      type: 'DELETE_LIST',
      id: id
    })
  }

  return (
    <Styles>
      <div className='projectListAndForm'>
        {projects.map(p => (
          <div className='projectList'>
            <div className='projectIcon'>
              <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                <path
                  d='M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z'
                  fill='#FF00F5'
                  // style={{ fill: 'hsl(0, 100%, 50%)' }}
                  // fill={
                  //   "hsl(" +
                  //   [0, 0, 0]
                  //     .map(function() {
                  //       return Math.round(100 * Math.random()) + "%"
                  //     })
                  //     .join(",") +
                  //   ")"
                  // }
                />
              </svg>
            </div>
            <div className='projectText'>
              {' '}
              <p> {p.projectName} </p>
              <p onClick={e => handleDeleteList(e, p.id)}>x</p>{' '}
            </div>
            <div className='projectNum'>{p.remainingTodos}</div>
          </div>
        ))}

        {addListIsShown && (
          <div className='projectListForm'>
            <div className='projectIcon'>
              <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                <path
                  d='M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4227C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0773C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z'
                  fill='#4c5f7e'
                />
              </svg>
            </div>
            <div className='projectText'>
              <form onSubmit={e => handleAddList(e)}>
                <input type='text' ref={addListRef} autoFocus />
              </form>
            </div>
            <div className='projectNum' onClick={e => handleAddListIsShown(e)}>
              x
            </div>
          </div>
        )}
        <AddProjectButton handleAddListIsShown={handleAddListIsShown} />
      </div>
    </Styles>
  )
}

export default ProjectList
