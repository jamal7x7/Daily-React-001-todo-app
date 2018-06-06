import React from 'react'
import '../styles/style.css'
import Todos from './Todos'
import AddTodo from './AddTodo'

class TodoApp extends React.Component {
  state = {
    todos: ['morning run', 'buy milk ','#100daysofcode challenge']
  }

  addTodoHandler = (e) => {
    e.preventDefault()
    const v = e.target.elements.addTextInput.value
    this.setState( () => (   
       this.state.todos.push(v)
    ))
    e.target.elements.addTextInput.value=''
  }

  doneHandler = (d) => {
   
    this.setState( (prevState) => (   
       {todos: prevState.todos.filter( todo => d !== todo)}
    ))
    
  }




  render () {
    return (
      <div >
        <h1 className='title'> TODO APP </h1>
        <Todos todos={this.state.todos} doneHandler={this.doneHandler}/>
        <AddTodo addTodoHandler={this.addTodoHandler} />
      </div>
    )
  }
}

export default TodoApp
