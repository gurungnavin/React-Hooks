import React, { useCallback, useState } from 'react';
import CallbackComponent from './CallbackComponent';

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);


//   const memoizedCallback = useCallback(() => {
//   console.log("Current count is:", count);  // <-- uses count directly
//   setCount(count + 1);                      // <-- also uses it directly
// }, [count]); // ✅ must include count


  // useCallback ensures this function is stable unless dependencies change
  const memoizedCallback = useCallback(() => {
    console.log("Current count is:", count);
    setCount(prev => prev + 1);
  }, [count]);

  return (
      <div className="bg-white shadow-xl rounded-3xl p-8 w-80 text-center space-y-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">UseCallback Example</h1>
        <CallbackComponent number={number} setNumber={setNumber}/>
        <div className="space-y-2">
          <p className="text-gray-700 text-lg">Counter: <span className="font-semibold text-emerald-600">{count}</span></p>
          <button
            onClick={memoizedCallback}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition"
          >
            Click Me
          </button>
        </div>
        <h1 className='text-center font-bold text-3xl'>Total : <span className='text-orange-500 text-5xl'>{number + count}</span></h1>
    </div>
  );
};

export default UseCallback;


// useCallback is used to memoize a function so that it does not get recreated on every render.
// we use it to optimize performance, especially when passing callbacks to child components.
// it prevents unnecessary re-renders by ensuring the function reference remains stable unless its dependencies change.



// we can also send functions as props to child components.

// const newFn = useCallback(() => {}, []);
// <ChildComponent fn={newFn} />