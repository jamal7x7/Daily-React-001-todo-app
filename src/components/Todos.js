import React from 'react'
import DateBar from './DateBar'
import Todo from './Todo'

const Todos = (props) =>  (
  <div className='todoContainer'>
    <DateBar />
    { props.todos.map((t,i) =>  
      <Todo 
      className = 'todo' 
      t={t} 
      key={i}
      doneHandler={props.doneHandler} /> )}  
    </div>
)

export default Todos
