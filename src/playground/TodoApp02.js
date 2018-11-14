import React, { useState, useEffect } from 'react'
import '../styles/style.sass'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default (props) => {
  const [todos, setTodos] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    let todoAdded = e.target.elements.inputText.value
    if (todoAdded) {
      setTodos([...todos, todoAdded])
      e.target.elements.inputText.value = ''
    }
  }
  const handleDone = t => {
    setTodos(todos.filter(el => el !== t))
  }

  return (
    <div className='todoContainer'>
      <DateBar />
      <Todo
        todos={todos}
        handleDone={handleDone}
      />
      <Form
        todos={todos}
        handleSubmit={handleSubmit}
      />

    </div>
  )
}

const Todo = (props) => (
  <div className='todo-wrapper'>
    <TransitionGroup >
      { props.todos.map((t, i) => (

        <CSSTransition
          in
          key={i}
          timeout={200}
          classNames='todos'
          unmountOnExit
          >
          <div className='todos'>
            <div className='color-priority' >
              <div className='color-dot' />
            </div>
            <h3 className='todo'> {t} <span onClick={e => props.handleDone(t)} className='done'>DONE</span></h3>
          </div>
        </CSSTransition>

          ))
        }
    </TransitionGroup>
  </div>

)

const Form = (props) => (


    <div className='input'>
      <form action='' onSubmit={props.handleSubmit}>

        <input type='text' className='input' name='inputText' />

        <button className='add-btn' >ADD</button>
      </form>
    </div>
)

const date = new Date()

const DateBar = (props) => (
  <CSSTransition
    ex
    timeout={200}
    classNames='todoContainerDate'
    >
    <div className='todoContainerDate'>
      Today is {date.toDateString()}
    </div>
  </CSSTransition>
)
