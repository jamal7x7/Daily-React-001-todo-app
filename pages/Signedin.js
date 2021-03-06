import { rgba } from 'polished'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { MyProjectsProvider } from '../components/sidebar/ProjectsContext'
import Sidebar from '../components/sidebar/Sidebar'
import TodoList from '../components/TodoList'
import { MyTodosProvider } from '../components/TodosContext'

const Styles = styled.div`
  .info-header {
    background: ${({ theme }) => rgba(theme.colors.bgd, 0.4)};
    /* background: black; */
    /* opacity: 0.3; */

    position: sticky;
    backdrop-filter: blur(4px);
    /* backdrop-filter: blur(4px) saturate(180%);  */
    top: 0;
    z-index: 1000;
  }
  /* height: 100%; */
  .wrapper {
    width: 100%;
    height: 100%;

    border-radius: 4px;
    // background-color: $bgm;
    // border: 1px solid $bgl;
    // box-shadow: 0 90px 100px -50px rgba(black, 0.4),
    //   0 50px 70px 10px rgba(black, 0.1);
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ' sideBar  content ';

    position: relative;
  }

  // * /////////////////////////////////////////////SIDE-BAR/////////////////////////////////////////////// * //

  /* .userCard {
    display: grid;
    grid-template-columns: 50px 1fr;
    padding-left: 50px;
    .userCardAvatar {
      display: grid;
      place-items: center;
    }
    .userCardName {
      display: grid;
      place-items: center start;
      padding-left: 16px;
    }
  } */

  // * ///////////////////////////////////////CONTENT///////////////////////////////////// * //

  .content {
    grid-area: 'content';
    background: ${({ theme }) => theme.colors.bgd};

    overflow-anchor: none;
    border-radius: 0 4px 4px 0;
    z-index: 1;
  }

  .anchor {
    overflow-anchor: auto;
    height: 1px;
  }
`

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ]

    case 'COMPLETED':
      return state.map(v => {
        if (v.id === action.id) {
          v = { ...v, completed: !v.completed }
        }
        return v
      })

    case 'REORDER':
      return [...action.reorderedTodos]

    case 'DELETED':
      return state.filter(v => v.id !== action.id)

    case 'RESET': {
      console.log(action)
      return action.payload
    }

    default:
      return state
  }
}

const projectsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: action.id,
          projectName: action.projectName,
          totalTodos: 0,
          remainingTodos: 0
        }
      ]

    case 'DELETE_LIST':
      return state.filter(v => v.id !== action.id)

    default:
      return state
  }
}

const Index = () => {
  const addListRef = useRef()
  const didRun = useRef(false)

  const [addTaskIsShown, setAddTaskIsShown] = useState(false)
  const [addListIsShown, setAddListIsShown] = useState(false)

  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Date.now(),
      text: 'Read',
      // completed: true,
      project: 'default'
    },
    {
      id: Date.now() + 1,
      text: 'Run',
      // completed: false,
      project: 'default'
    },
    {
      id: Date.now() + 2,
      text: 'Pray',
      // completed: false,
      project: 'default'
    }
  ])
  const [projects, projectDispatch] = useReducer(projectsReducer, [
    {
      id: Date.now(),
      projectName: 'Design',
      totalTodos: 0,
      remainingTodos: 0
    }
  ])

  useEffect(() => {
    if (!didRun.current) {
      const raw = localStorage.getItem('data')
      dispatch({
        type: 'RESET',
        payload: JSON.parse(raw)
      })
      didRun.current = true
    }
  })

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todos))
  }, [todos])

  const handleCheckBox = (e, id) => {
    e.preventDefault()
    // console.log("done")

    dispatch({
      type: 'COMPLETED',
      id: id,
      completed: true
    })
  }

  const handleAddTask = e => {
    setAddTaskIsShown(prev => !prev)
  }

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const handleOnDragEnd = result => {
    // e.preventDefault()
    // dropped outside the list
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const reorderedTodos = reorder(
      todos,
      result.source.index,
      result.destination.index
    )
    console.log('to', reorderedTodos)

    dispatch({
      type: 'REORDER',
      reorderedTodos
    })
  }

  const handleAddListIsShown = e => {
    setAddListIsShown(prev => !prev)
  }

  return (
    <Layout>
      <Styles>
        <MyProjectsProvider value={{ projects, projectDispatch }}>
          <MyTodosProvider value={{ todos, dispatch }}>
            <div className='wrapper'>
              <Sidebar
                addListIsShown={addListIsShown}
                handleAddListIsShown={handleAddListIsShown}
                // handleAddList={handleAddList}
                // handleDeleteList={handleDeleteList}
                addListRef={addListRef}
                projects={projects}
                // handleAddListIsShown={handleAddListIsShown}
              />

              <div className='content'>
                <TodoList
                  // todos={todos}
                  handleOnDragEnd={handleOnDragEnd}
                  handleCheckBox={handleCheckBox}
                  // handleDeleteTodo={handleDeleteTodo}
                  addTaskIsShown={addTaskIsShown}
                  // inputRef={inputRef}
                  handleAddTask={handleAddTask}
                  // handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </MyTodosProvider>
        </MyProjectsProvider>
      </Styles>
    </Layout>
  )
}

export default Index
