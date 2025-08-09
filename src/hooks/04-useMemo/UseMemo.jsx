import React, { useMemo, useState } from 'react'

const UseMemo = () => {

  const [number, setNumber] = useState('');
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState('');

  const squareNum = (num) => {
    console.table('Calculating square...');
    return Math.pow(num, 2);
  }

  // const result = squareNum(number);
  // This will recalculate square every time the component re-renders
  // To avoid unnecessary calculations, we use useMemo
  // Now it will only recalculate when 'number' changes
  const result = useMemo(() => squareNum(number), [number])

  const counterHandler = () => {
    setCounter(counter + 1);
  }


  return (
   <div className='w-xs min-h-[250px] p-4 bg-amber-50 rounded-2xl flex flex-col items-center'>
      <h1 className='text-center text-xl'>UseMemo Example</h1>
      <p>{display}</p>
      <input
      type='number'  
      placeholder='Enter a number'
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      className='bg-yellow-100 border mt-4 py-2 pl-2 rounded-2xl' 
      />
      <h2 className='mt-4'>{number ? `Square of ${number} : ${result}` : "" }</h2>
      <div className='flex flex-col items-center'>
        <h2 className='mt-4 text-3xl'>{counter}</h2>
        <button
        className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-2'
        onClick={counterHandler}>Counter</button>
      </div>
    </div>
  )
}

export default UseMemo



// We use useMemo to optimize performance by memoizing(remembering) the result of a function call.
// It will only recalculate the result when the dependencies change, avoiding unnecessary calculations on every render.
// useMemo is render first time at initial render and then only when dependencies change.