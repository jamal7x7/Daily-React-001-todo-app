import React, { useContext, useReducer, useRef } from 'react'

const MyContext = React.createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					id: Date.now(),
					text: action.text,
					isCompleted: false
				}
			]

		case 'COMPLETED':
			return state.map(t => {
				if (t.id === action.id) {
					t.isCompleted = !t.isCompleted
				}
				return t
			})
		case 'DELETE':
			return state.filter(t => t.id !== action.id)

		default:
			return state
	}
}

export default () => {
	const [todos, dispatch] = useReducer(reducer, [
		{
			id: Date.now(),
			text: 'Hello',
			isCompleted: false
		}
	])
	return (
		<MyContext.Provider value={{ todos, dispatch }}>
			<div className="app-container">
				<AddTodo />
				<TodoList />
			</div>
		</MyContext.Provider>
	)
}

const AddTodo = () => {
	const context = useContext(MyContext)
	const inputRef = useRef()
	const handleSubmit = e => {
		e.preventDefault()
		context.dispatch({
			type: 'ADD',
			text: inputRef.current.value
		})
		inputRef.current.value = ''
	}
	return (
		<form action="" onSubmit={handleSubmit}>
			<input type="text" ref={inputRef} />
		</form>
	)
}

const TodoList = () => {
	const context = useContext(MyContext)
	const handleCompleted = (e, x) => {
		e.preventDefault()
		context.dispatch({
			id: x,
			type: 'COMPLETED'
		})
	}
	const handleDelete = (e, x) => {
		e.preventDefault()
		context.dispatch({
			id: x,
			type: 'DELETE'
		})
	}
	return (
		<div>
			{context.todos.map(t => (
				<div key={t.id}>
					<h1 className={t.isCompleted ? 'crossed' : ''}>{t.text}</h1>
					<h3 onClick={e => handleCompleted(e, t.id)}>Done</h3>
					<h3 onClick={e => handleDelete(e, t.id)}>x</h3>
				</div>
			))}
		</div>
	)
}

// import React, { useContext, useReducer, useRef } from 'react'

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD':
// 			return [
// 				...state,
// 				{
// 					id: Date.now(),
// 					text: action.text,
// 					done: false
// 				}
// 			]
// 		case 'DONE':
// 			return {}

// 		case 'ADD':
// 			return [
// 				...state,
// 				{
// 					id: Date.now(),
// 					text: action.text,
// 					done: false
// 				}
// 			]

// 		default:
// 			return state
// 	}
// }
// const MyContext = React.createContext()
// export default () => {
// 	const [todos, dispatch] = useReducer(reducer, [
// 		{
// 			id: Date.now(),
// 			text: 'hello',
// 			done: false
// 		}
// 	])

// 	return (
// 		<MyContext.Provider value={{ todos, dispatch }}>
// 			<div className="app-container">
// 				<AddTodo dispatch={dispatch} />
// 				<TodoList todos={todos} />
// 			</div>
// 		</MyContext.Provider>
// 	)
// }

// const TodoList = () => {
// 	const c = useContext(MyContext)
// 	const handleDone = (e, pl) => {
// 		e.preventDefault()
// 		c.dispatch({
// 			type: 'DONE',
// 			id: pl
// 		})
// 	}
// 	return (
// 		<div>
// 			{c.todos.map(t => (
// 				<>
// 					<h1>{t.text}</h1>
// 					<h1 onClick={e => handleDone(e, t.id)}>Done </h1>
// 					<h1>X</h1>
// 				</>
// 			))}
// 		</div>
// 	)
// }

// const AddTodo = () => {
// 	const inputRef = useRef()
// 	const c = useContext(MyContext)

// 	const handleSubmit = e => {
// 		e.preventDefault()
// 		c.dispatch({
// 			type: 'ADD',
// 			text: inputRef.current.value
// 		})
// 		inputRef.current.value = ''
// 	}

// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<input type="text" ref={inputRef} />
// 				<input type="time" name="" id="" />
// 			</form>
// 		</div>
// 	)
// }

// import React,{ useReducer, useContext, useRef } from 'react'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return [
//         ...state,
//         {
//           id: Date.now(),
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'DELETE':
//       return state.filter( t  => action.id !== t.id )

//     case 'COMPLETE':
//       return state.map( t => {
//        (action.id === t.id) && (t.completed = !t.completed)
//        return t
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
//       completed: false
//         }
//       ])

// }
//     const handleDelete = (e, x) => {
//       e.preventDefault()
//       dispatch({
//         id: x,
//         type: 'DELETE',
//       })
//     }
//     return (
//     <div className=''>
//       {todos.map( (t, i) => (
//         <>
//         <h3 className={t.completed && 'crossed'}> {t.text} </h3>
//         <h3 onClick={e => handleComplete(e, t.id)} className='donex'>COMPLETED</h3>
//         <h3 onClick={e => handleDelete(e, t.id)} className='closex'>DELETE</h3>
//         </>
//       ))}
//     </div>
//     )

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
