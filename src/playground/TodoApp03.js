import React, { useState } from 'react'
import '../styles/style.sass'

// New context
const MyContext = React.createContext()
// Create a Provider Component
class MyProvider extends React.Component {
  state = {
    myName: 'Jamal',
    cool: true
  }
  render() {
    return (
      <MyContext.Provider value={this.state} >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default props => {

  const [todos, setTodos] = useState(['H', 'I'])

  const handleAdd = ( e => {
    e.preventDefault()
    let t = e.target.elements.text.value
    t && setTodos( () => [...todos, t]) 
    e.target.elements.text.value = ''
  })

  return (
    <MyProvider>
      <div className="todoContainer">
        <TodoList todos={todos} />
        <AddTodo handleAdd={handleAdd}/>
        <TestContext/>
      </div>
    </MyProvider>
  )
}

const TodoList = props => (
  <div className="todo-wrapper">
    {props.todos.map((t, i) => (
      <h1 className='todos' key={i}>{t}</h1>


    ))}
  </div>
)

const AddTodo = props => (
  <div className="form">
    <form action="" onSubmit={props.handleAdd}>
      <input type="text" name='text'/>
    </form>
  </div>
)

const TestContext = props => (
  <div className="test">
      <MyContext.Consumer>
        { (context) => {
            if (context.cool) {
              return (
                <>
                  <h1> Inside Consumer {context.myName} </h1>
                  <h1> and I'm verry cool    </h1>
                </>
              )
            }
          }
        }
      </MyContext.Consumer>
  </div>
)
