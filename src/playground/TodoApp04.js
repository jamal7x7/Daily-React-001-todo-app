import React, { useState, useReducer } from 'react'




// const initialState = {count: 0};

function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'reset':
      return {count: 0};
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, {count: initialCount});
  return (
    <>
      Count: <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

function Counter2({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: <h1>{count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}

export default Counter

// const initialState = ['Hi!'];

// function reducer(state, action) {
//   switch (action.type) {
//     case 'reset':
//       return initialState
//     case 'add':
//       return [...initialState, 1]
//     default:
//       return state
//   }
// }






// export default props => {
// 	const [state, dispatch] = useReducer(reducer, [])
// 	const [count, setCount] = useState(0);

// 	console.log('reducer', dispatch({type: 'reset'}));


// 	return (
// 		<div className="todoContainer">
// 			<TodoList />
// 			<AddTodo state={state}/>
// 		</div>
// 	)
// }

// const TodoList = props => (
// 	<div className="todo">
// 		{/* {todo.map((t, i) => (
// 			<h1 key={i}> {t} </h1>
//     ))} */}


// 	</div>
// )

// const AddTodo = props => (
// 	<div className="todo">
// 	  {props.state.map( (t ,i) => (
// 			<h1 key={i}> {t}</h1>
// 		))}
// 	</div>
// )

