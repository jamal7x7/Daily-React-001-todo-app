import React, { useState, useEffect } from 'react'
import '../styles/style.sass'
// import Todos from './Todos'
// import AddTodo from './AddTodo'

export default function TodoApp (props) {
  // const [todos, setTodos] = useState('')
  const [todos, setTodos] = useState(['Morning run', 'Buy milk ', 'Design challenge'])

  function addTodoHandler (e) {
    e.preventDefault()
    const todoAdded = e.target.elements.addTextInput.value.trim()
    if (todoAdded) {
      setTodos(() => (todos.push(todoAdded)))
      e.target.elements.addTextInput.value = ''
    }
  }

  function doneHandler (d) {
    setTodos(
      todos.filter(todo => d !== todo)
    )
  }

  return (

    // <div>
    //   <h1> hello </h1>

    // </div>
    <div >
      {/* <h1 className='title'> TODO APP </h1> */}
      <Todos
        todos={todos}
        doneHandler={doneHandler} />
      <AddTodo
        addTodoHandler={addTodoHandler} />
    </div>
  )
}
// class TodoApp extends React.Component {
//   state = {
//     todos: ['morning run', 'buy milk ','#100daysofcode challenge']
//   }

//   addTodoHandler = (e) => {
//     e.preventDefault()
//     const todoAdded = e.target.elements.addTextInput.value.trim()
//     if (!!todoAdded) {
//       this.setState( () => ( this.state.todos.push(todoAdded) ))
//       e.target.elements.addTextInput.value=''
//     }
//   }

//   doneHandler = (d) => {
//     this.setState( (prevState) => (
//       {todos: prevState.todos.filter( todo => d !== todo)}
//     ))
//   }

//   render () {
//     return (
//       <div >
//         {/* <h1 className='title'> TODO APP </h1> */}
//         <Todos todos={this.state.todos} doneHandler={this.doneHandler}/>
//         <AddTodo addTodoHandler={this.addTodoHandler} />
//       </div>
//     )
//   }
// }

const AddTodo = (props) => (
  <div className='addTodoContainer'>
    <form action='' onSubmit={props.addTodoHandler}>
      <input type='text' name='addTextInput' placeholder='Type here ...' />
      <button> ADD </button>
    </form>
  </div>
)

const date = new Date()

const DateBar = (props) => (
  <div className='todoContainerDate'>
     Today is {date.toDateString()}
  </div>
)

const Todo = (props) => (
  <div className='todo'>
    <p> {props.t} </p>
    <p onClick={e => props.doneHandler(props.t)} className='done'> DONE </p>
  </div>
)

const Todos = (props) => (
  <div className='todoContainer'>
    <DateBar />
    { props.todos.map((t, i) =>
      <Todo
        className='todo'
        t={t}
        key={i}
        doneHandler={props.doneHandler} />)}
  </div>
)
