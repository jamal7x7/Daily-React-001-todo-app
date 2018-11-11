import React, { useState } from 'react'

export default (props) => {
  const [todos, setTodos] = useState(['A'])
  const [v, setValue] = useState('')
  const [counter, setCounter] = useState(0)

  const handleChange = (e) => {
    e.preventDefault()
    e.target.classList.toggle('color')

    setValue(e.target.value + '  ')
  }
  const handleClick = (e) => {
    e.preventDefault()
    let t = [v, ...todos]
    setTodos(t)
    setValue('')
    setCounter(counter + 1)
  }
  const handleDelete = (e) => {
    // e.preventDefault()

    setTodos(todos.filter(t => t !== e))

    console.log('del')
  }

  return (
    <div className='todoContainer'>

      <form action=''>
        <input type='text' value={v} onChange={handleChange} />
        <button onClick={handleClick} > ADD </button>
      </form>

      {todos.map((el, i) => (
        <h2
          className='todo'
          key={i}> {el} ---> {counter} <span onClick={e => handleDelete(el)}>X
          </span>
        </h2>
      ))}

    </div>
  )
}
