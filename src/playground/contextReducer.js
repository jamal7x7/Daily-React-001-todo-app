import React, {useReducer, useRef} from 'react'

const reducer = (state, action) => {
  switch (action.type)  {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE':
      return state.map( t => {
        if (t.id === action.id) {
          t.completed = !t.completed
        }
      })
    default: 
      return state

  }
}

export default () => {
  const [todos, dispatch] = useReducer( reducer, [
    {
      id: Date.now(),
      text: 'Milk',
      completed: false
    }
  ])
  
  return (
    <div className="app-container">
      <AddTodo dispatch={dispatch} todos={todos}/>
      <TodoList dispatch={dispatch} todos={todos}/>
    </div>
  )
}

const AddTodo = ({dispatch}) => {
  const inputRef = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD',
      text: inputRef.current.value
    })
    inputRef.current.value = ''

  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type='text' ref={inputRef}/> 
    </form>
  )
}

const TodoList = ({todos, dispatch}) => {
  const handleComplete =(e, x)  => {
    e.preventDefault()
    dispatch({
      id: x,
      type: 'COMPLETE'
    })
  }
  return (
    <div className='' >
      {todos.map( t => (
        <>
          <h3 key={t.id}>{t.text}
            <span onClick={e => handleComplete(e, t.id)}>✓</span>
            <span>x</span>

          </h3>
        </>
      ))}
    </div>
  )
}

































// import React,{ useReducer, useContext, useRef } from 'react'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return [
//         ...state,
//         {
//           id: Date.now(),
//           text: action.text,
//           complited: false
//         }
//       ]
//     case 'DELETE':
//       return state.filter( t  => action.id !== t.id )

//     case 'COMPLETE': 
//       return state.map( (t, i) => {
//        if (action.id === t.id) {
//         return (t.complited = true)
//        } 
//       })

      

      
  
//     default:
//       return state    
//   }
// }

// export default () => {
//   const [ todos, dispatch ] = useReducer( reducer, [
//     {
//       id: Date.now(),
//       text: 'hello',
//       complited: false
//     }
//   ])
  
 
//   return (
//     <div className="app-container">
//       <AddTodo dispatch={dispatch}/>
//       <TodoList dispatch={dispatch} todos={todos}/>
//     </div>
//   )
// }

// const TodoList = ({todos, dispatch}) => {
//     const handleComplete = (e, x) => {
//       e.preventDefault()
//       dispatch({
//         id: x,
//         type: 'COMPLETE'
//       })
//     }
//     const handleDelete = (e, x) => {
//       e.preventDefault()
//       dispatch({
//         id: x,
//         type: 'DELETE'
//       })
//     }
//     return (
//     <div className=''> 
//       {todos.map( (t, i) => (
//         <>
//         <h3 className={(t.complited === true) ? 'crossed' : ''}> {t.text} </h3>
//         <h3 onClick={e => handleComplete(e, t.id)} className='donex'>COMPLETED</h3>
//         <h3 onClick={e => handleDelete(e, t.id)} className='closex'>DELETE</h3>
//         </>
//       ))}
//     </div>
//     )
 
// }

// const AddTodo = ({dispatch}) => {
  
//   const inputRef = useRef()
  
//   const handleAddTodo = (e) => {
//     e.preventDefault()
//    dispatch({
//      type: 'ADD',
//      text: inputRef.current.value
//    })
//    inputRef.current.value = ''

//   }

//   return (
//     <div className='todo'>
//       <form onSubmit={handleAddTodo}>
//         <input type="text" ref={inputRef}/>
//       </form>
      
//     </div>
//   )
// }













// import React, { useRef, useState, useReducer} from 'react'

// const reducer = (state, action) => {
  
//   switch (action.type) {
//     case 'ADD':
//     return [
//       ...state,
//       {
//         text: action.text,
//         id: Date.now(),
//         i: 0 
//       }
//     ] 
    
//     default:
//     return state
//   }
  
// }

// export default () => {
 
  
//   // const [todos, setTodos] = useState([])
//   const [todos, dispatch] = useReducer(reducer, [
//     // {
//     //   text: 'first Item',
//     //   id: Date.now(),
//     //   i: 0
//     // }
//   ])

//   return (
//     <div className="app-container">
//       <AddTodo dispatch={dispatch} />
//       <TodoList todos={todos}/>
//     </div>
//   )
// }


// const AddTodo = ({todos, dispatch}) => {
//   const myRef = useRef()
//  const handleSubmit = (e) => {
//    e.preventDefault()
//    dispatch({
//      type: 'ADD',
//      text: myRef.current.value

//    })
//    myRef.current.value = ''
//  }
//  return  ( 
//      <div className=""onSubmit={handleSubmit}>
//      <form action="">
//       <input type="text"  ref={myRef}/>
//      {/* <button >ADD</button> */}

//      </form>
//         </div>


// )}
// const TodoList = ({todos}) => (
//      <div className="">
//        { todos.map(t => ( 
//         <h3>{t.text}</h3>
//         <h3 onClick={dispatch(({
//           type: 'DELETE'
//           id: t.id
//         }))}>X</h3>
//        )) }
//     </div>


// )

















































// import React, { useReducer, useRef, useEffect } from "react"

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return [...state, 'action.text']
      
  
//     default:
//       return state
//   }
// }

// export default () => {
//   const [todos, dispatch]= useReducer(reducer, ['hfhj'])

//   return (
//     <div className="app-container">
//       <TodoList todos={todos}/>
//       <TodoForm dispatch={dispatch}/>
      
//     </div>
//   )
// }

// const TodoList = ({todos}) => (
//   <div className="app-container">
//     {todos.map((item, i) =>  <h3 key={i} className='todo'> {item} </h3>)}
//   </div>
// )

// const TodoForm = ({dispatch}) => {

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch({type: "ADD"})
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <input type="text" />
//     </form>
//   )
// }