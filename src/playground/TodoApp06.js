import React, { useReducer, useRef } from "react"
import { Spring, Transition, config } from 'react-spring'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false
        }
      ]
      case 'completed':
        return state.map( t => {
          if (action.id === t.id) {
            return {
              ...t,
              completed : !t.completed
            }
          } 
          return t
        })
      case 'delete':
        return state.filter( t => action.id !== t.id) 
    
      
    default:
      return state
     
  }
}

export default () => {

  const date = new Date()
  const inputRef = useRef()
  const [todos, dispatch] = useReducer(reducer,[])

  const handleAddTodo = e => {
    e.preventDefault()
    dispatch({
      type: 'add',
      text: inputRef.current.value
    })
    inputRef.current.value = ''
  }

  const handlecompleted = id => {
    dispatch({
      id: id,
      type: 'completed',
    })
  }

  const handleDelete = id => {
    dispatch({
      id: id,
      type: 'delete',
    })
  }

  return (
    <div className="app-container">

      <div className="date">
        {date.toDateString()}
      </div>

    
      {todos.map( (t, i) => (
       
        
        <div className="todo-wrapper" onClick={e => handlecompleted(t.id)}>
          <div className="todo-wrapper__dot">
          
          </div>
          <Spring 
            from={{ 
              opacity: 0,
              transform: 'translate3d(30px,0,0) scale(1) rotateX(90deg)' }} 
            to={{ 
              opacity: 1, 
              transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)' }}>
              {props => <h3 style={props}  className={'todo-wrapper__text' + (t.completed ? ' crossed' : '')} key={t.id}>{t.text}</h3>}
          </Spring>

          <div className="todo-wrapper__actions">
            <Spring 
              from={{ 
                opacity: 0,
                transform: 'translate3d(30px,0,0) scale(1) rotateX(90deg)' }} 
              to={{ 
                opacity: 1, 
                transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)' }}>
                {props => <h3 style={props} onClick={e => handlecompleted(t.id)} className='done'>✓</h3>}
            </Spring>
            
            <Spring 
              config={config.wobbly}
              delay={300}
              from={{ 
                opacity: 0,
                transform: 'translate3d(0,0,0) scale(1) rotateX(90deg)' }} 
              to={{ 
                opacity: 1, 
                transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)' }}>
                {props => <h3 style={props} onClick={e => handleDelete(t.id)} className='close'>✕</h3>}
            </Spring>
              
          </div>
        </div>
      ))}
   
      <div className="todo-form">
        <form action=""onSubmit={handleAddTodo}>
          <input type="text" ref={inputRef}/>
        </form>
      </div>

    </div>
  )
}






























//+++++++++++++++++++++++++++++++++++++++++=====================================
// export default props => {

//   const inputRef = useRef()

//   const reducer = (state,action) => {
//     switch (action.type) {
//       case 'add':
//         return [
//           ...state, 
//           {
//             id: Date.now(),
//             text: action.text
//           }
//         ]
//         case 'close':
//           return state.filter((t, i) => {
//             return action.id !== t.id
//           })

//         case 'completed':
//           return state.map((t, i) => {
//             if (action.id === t.id) {
//               return state[i].completed = true
//               console.log('true');
//             }
//           })
//         default:
//         return state
//   }
//   }
  
//   const [todos, dispatch] = useReducer(reducer, [])

//   const handleSubmit = e => {
//     e.preventDefault()
//     dispatch({
//       type: 'add',
//       text: inputRef.current.value,
//       completed: false
//     })
//     inputRef.current.value = ''
//   }

//   const handleDelete = id => {
//     dispatch({
//       id: id,
//       type: 'close',
//     })
//   }
//   const handlecompleted = id => {
//     dispatch({
//       id: id,
//       type: 'completed',
//     })
//   }
  
//   return (
//     <div className="app-container">

//       <DateBar/>

//       <TodoList
//         todos={todos}
//         handleDelete={handleDelete}
//         handlecompleted={handlecompleted}
        
//         />

//       <AddTodo 
//         handleSubmit={handleSubmit}
//         inputRef={inputRef}
//       />

//     </div>
//   )
// }

// const TodoList = (props) => (
//   <div >
//     {props.todos.map( (t, i) => (
//       <Todo
//         t={t}
//         i={i}
//         todos={props.todos}
//         handleDelete={props.handleDelete}
//         handlecompleted={props.handlecompleted}
        
//       />
//     ))}
//   </div>
// )

// const Todo = (props) => (
//   <div className="todo-wrapper">
//       <div className='todo-wrapper__dot' >
//       </div>
//       <h3 className={'todo-wrapper__text' + (true ? ' crossed' : '')} key={props.t.id}> {props.t.text} </h3> 
//       <div className="todo-wrapper__actions">
//         <div  onClick={e => props.handlecompleted(props.t.id)}> DONE </div>
//         <div className='clos' onClick={e => props.handleDelete(props.t.id)}> X </div>
//       </div>
//   </div>
// )

// const AddTodo = (props) => (
//   <div className="fo">
//       <form onSubmit={props.handleSubmit}>
//         <input type='text' ref={props.inputRef}/> 
//       </form>
//   </div>
// )

// const DateBar = (props) => {
//   const date = new Date()
//   return(
//     <div className='date'>
//       Today is {date.toDateString()}
//     </div>
// )}