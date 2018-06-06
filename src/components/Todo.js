import React from 'react'

const Todo = (props) => (
  <div className = 'todo'>
    <p> {props.t} </p>
    <p onClick={e => props.doneHandler(props.t)} className='done'> DONE </p>  
  </div>
)

export default Todo
