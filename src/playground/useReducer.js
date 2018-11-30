import React, { useReducer, useContext} from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    default:
     return state
  }
}

const MyContext = React.createContext()

export default () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, {count: 0})

  

  return (
    <MyContext.Provider value={{state, dispatch}} >
        <CountView />
    </MyContext.Provider>
  )
}

const CountView = () => {
  const context = useContext(MyContext)

  const handleIncrement = () => {
    context.dispatch({type: 'increment'})  
  }
  return (
    <div className="app-container">
      <h1 >{context.state.count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}