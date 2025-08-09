import React, { useReducer } from 'react';

const UseReducer = () => {

  const inititalState = {count: 0}

  const reducer = (state, action) => {
    switch(action.type) {
      case 'increment':{
        return {count: state.count + 1}
      }
      case 'decrement':{
        return {count: state.count - 1}
      }
      case 'reset':{
        return {count: 0}
      }
      case 'set':{
        return {count: action.payload}
      }
      default:
        return state; // Return the current state if action type is not recognized
    }

  }

  const [state, dispatch] = useReducer(reducer, inititalState)

  return (
   <div className="flex flex-col items-center max-w-md mx-auto p-6 bg-white border-4 border-orange-400 rounded-xl shadow-lg space-y-6">
  <h1 className="text-3xl font-bold text-orange-500">useReducer Hook Example</h1>

  <p className="text-xl font-semibold text-gray-800">
    Count: <span className="text-blue-600">{state.count}</span>
  </p>

  <div className="flex space-x-4">
    <button
      className="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
      onClick={() => dispatch({ type: 'increment' })}
    >
      Increment
    </button>
    <button
      className="px-4 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition"
      onClick={() => dispatch({ type: 'decrement' })}
    >
      Decrement
    </button>
  </div>

  <button
    className="px-6 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
    onClick={() => dispatch({ type: 'reset' })}
  >
    Reset
  </button>

  <div className="flex flex-col items-center space-y-2 w-full">
    <label htmlFor="countInput" className="text-sm font-medium text-gray-700">
      Set Count Manually:
    </label>
    <input
      id="countInput"
      type="number"
      value={state.count}
      onChange={(e) =>
        dispatch({ type: 'set', payload: Number(e.target.value) })
      }
      placeholder="Enter a number"
      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
    />
  </div>
</div>

  ) 
}

export default UseReducer



{/* 
"useReducer is similar to useState, but in useState we get the state and a set function(like setValue, setNumber etc..) to update it — usually handling one action or change at a time.

In useReducer, we get the state and a dispatch function. Dispatch means sending an action (a command) to a reducer function.

※ The reducer function is a pure function that takes the current state and the action, and returns the new updated state.

"This is useful when one useReducer can manage multiple parts of the state — like a car dashboard that controls music, AC, seat position, and doors all from one place. 
  
  */}