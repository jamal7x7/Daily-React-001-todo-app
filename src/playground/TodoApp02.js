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
  <div className='todoos'>

    <div className='todo-wrapper'>
      <TransitionGroup >
        { props.todos.map((t, i) => (

          <CSSTransition
            in
            appear

            timeout={300}
            classNames='todos'
          // unmountOnExit
          >
            <div key={i} className='todos'>
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
  </div>
)

const Form = (props) => (

  <CSSTransition
    in
    appear

    timeout={300}
    classNames='inp'
  // unmountOnExit
  >

    <div className='inp'>
      <form action='' onSubmit={props.handleSubmit}>

        <input type='text' className='input' name='inputText' />

        <button>ADD</button>
      </form>
    </div>
  </CSSTransition>
)

const date = new Date()

const DateBar = (props) => (
  <div className='todoContainerDate'>
     Today is {date.toDateString()}
  </div>
)
