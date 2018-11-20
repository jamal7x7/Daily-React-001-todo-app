import React, {useState, useReducer} from 'react'

export default (props) => {
  const [todos, setTodos] = useState([{
    text: 'read',
    completed: false,
    dateCreated: new Date().toLocaleTimeString(),
    dateCompleted: new Date().toLocaleTimeString()
  }])

  const handleAddTodo = e => {
    e.preventDefault()
    let a = {
      text: e.target.elements.add.value,
      completed: false,
      dateCreated: new Date().toLocaleTimeString(),
      dateCompleted: ''
    }
    setTodos([...todos, a])
    e.target.elements.add.value = ''
  }
  
  const handleCompleted = ind => {
    let newTodos = [...todos]
    newTodos.map( (t, i) => {
      if (i === ind) {
        todos[i].completed = !todos[i].completed
        todos[i].dateCompleted=  new Date().toLocaleTimeString()
      }
    })
    setTodos(newTodos)
  }

  const handleDelete = ind => {
    let newTodos = [...todos]
    newTodos.splice(ind, 1)
    setTodos(newTodos)
  }

  return (
    <div className='todoContainer'>
      <TodoList 
        todos={todos} 
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        />
      <AddTodo 
        todos={todos}
        handleAddTodo={handleAddTodo}
         />
    </div>
  )
}

const TodoList = (props) => (
  
  <div className='todo-wrapper' >
    {props.todos.map( (t, i) => (
      <div className= { 'todos' + (props.todos[i].completed ? ' colored close:hover' : '')}>
        <div className='color-priority' >
          <div className='color-dot' />
        </div>
        <div className='todo' >
          <div onClick={e => props.handleDelete(i)} className='close'>X</div>
          <h3 className={(props.todos[i].completed && ' crossed' : '')} key={i}> {t.text} </h3>
          <h3 onClick={e => props.handleCompleted(i)} className='done' >DONE</h3 > 
          {/* <div key={i**7+1}>{t.dateCreated}</div> */}
          {/* {t.completed ? <div key={i**9+1}>{t.dateCompleted}</div> : <div key={i**9+2}> not yet </div> } */}
        </div>
      </div>
    ))}
  </div>
)

const AddTodo = (props) => (
  <div className='todoContainers' >
    <form onSubmit={ props.handleAddTodo }>
      <input type='text' name='add'/>
    </form>   
    {/* <br/> <br/>( ͡o ͜ʖ ͡o), */}
  </div>
)

