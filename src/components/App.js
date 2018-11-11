import React, { useState, useEffect } from 'react'

export default () => {
  const [todos, setTodos] = useState(['run', 'read', 'pray', 'eat'])
  const [current, setCurrent] = useState('hello')

  const handleClick = (e) => {
    e.preventDefault()

    // console.log(e.target.className)
    e.target.classList.toggle('color')
    // console.log(e.target.className)

    let todo = e.target.elements.inputText.value
    // console.log('hello')
    if (todo) {
      setTodos([todo, ...todos])
      e.target.value = ''
    }
  }

  const handleTodoClick = (e) => {
    e.preventDefault()

    e.target.classList.toggle('color')
    handleCurrrentClick(e)
  }

  const handleCurrrentClick = (e) => {
    e.preventDefault()
    let v = e.target.value
    // console.log('v: ', v)

    setCurrent(v)
  }

  useEffect(() => {
    document.title = todos[0]

    console.log('================')

    const url = 'https://randomuser.me/api/'

    fetch(url)
    .then(function (res) {
      return res.json().then(function (data) {
        let x = data.results[0].name.first
        console.log(x)
      })
    })
    .catch(error => {
      console.log(error)
    })
  })

  return (

    <div >
      <form onSubmit={handleClick} >
        <input type='text' name='inputText' className='inputText' />
        <button >go</button>
      </form>
      <div >

        {todos.map(todo => <p className='todo' onClick={handleTodoClick} key={todo}> {todo} </p>)}
      </div>
      <h1>{current}</h1>
    </div>
  )
}

// export default class Tod extends React.Component {
//     state = {
//         t: ['run', 'read', 'pray', 'eat']
//     }

//     handleClick = (e) => {
//         e.preventDefault()

//         console.log(e.target.className)
//         e.target.classList.toggle('color')
//         console.log(e.target.className)

//         let to = e.target.value
//         console.log('hello')
//         if (!!to) {

//             this.setState( () => (this.state.t.push(to)))

//             e.target.value = ''
//         }
//     }

//     render() {
//         return (

//                 <div>

//                     <input type="text" className='inputText' onClick={this.handleClick}/>
//                     {this.state.t.map( el => <p key={el}> {el} </p>)}
//                 </div>
//               )
//     }

// }
