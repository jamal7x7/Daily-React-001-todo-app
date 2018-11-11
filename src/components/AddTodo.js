import React from 'react'

const AddTodo = (props) => (
  <div className='addTodoContainer'>
    <form action='' onSubmit={props.addTodoHandler}>
      <input type='text' name='addTextInput' placeholder='Type here ...' />
      <button> ADD </button>
    </form>
  </div>
)

export default AddTodo
