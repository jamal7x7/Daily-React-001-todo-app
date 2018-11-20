import React, { useReducer, useRef } from "react"

export default props => {

  const inputRef = useRef()

  const reducer = (state,action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state, 
          {
            id: Date.now(),
            text: action.text
          }
        ]
      case 'close':
        return state.filter((t, i) => {
          return action.id !== t.id
        })
      default:
        return state
  }
  }
  
  const [todos, dispatch] = useReducer(reducer, [])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'add',
      text: inputRef.current.value,
      isCompleted: true
    })
    inputRef.current.value = ''
  }

  const handleClose = id => {
    dispatch({
      id: id,
      type: 'close',
    })
  }
  
  return (
    <div className="todoContainer">

      <DateBar/>

      <TodoList
        todos={todos}
        handleClose={handleClose}
      />

      <AddTodo 
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />

    </div>
  )
}

const TodoList = (props) => (
  <div className="todoContainer">
    {props.todos.map( t => (
      <Todo
        t={t}
        todos={props.todos}
        handleClose={props.handleClose}
      />
    ))}
  </div>
)

const Todo = (props) => (
  <div className="todo-wrapper">
      <h3 className="todo" key={props.t.id}> {props.t.text} </h3> 
      <div className='close' onClick={e => props.handleClose(props.t.id)}> X </div>
  </div>
)

const AddTodo = (props) => (
  <div className="fo">
      <form onSubmit={props.handleSubmit}>
        <input type='text' ref={props.inputRef}/> 
      </form>
  </div>
)

const date = new Date()
const DateBar = (props) => (
    <div className='todoContainerDate'>
      Today is {date.toDateString()}
    </div>
)