import React, { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
  const[value, setValue] = useState(0)
  const count = useRef(0)

  useEffect(()=> {
    count.current = count.current + 1
  })
  return (
    <div className='flex flex-col items-center'>
      <button
      className='px-5 py-1 text-2xl font-bold bg-amber-300 rounded-xl cursor-pointer hover:bg-amber-200'
      onClick={() =>setValue((prev) => prev-1)}>-1</button>
      <h1 className='text-4xl font-bold my-4 bg-white px-5'>{value}</h1>
      <button
      className='px-5 py-1 text-2xl font-bold bg-amber-300 rounded-xl cursor-pointer hover:bg-amber-200'
      onClick={() =>setValue((prev) => prev+1)}>+1</button>

      <h2>The page Rendenders : {count.current}</h2>
    </div>
  )
}

export default UseRefExample


/* 
Wallet analogy for useRef (polished)
- our wallet is where you keep your money and cards safe.

- No matter how many times you put money in or take money out, the wallet itself doesn’t change its shape or size.

- It just quietly holds your stuff while you do other things.

^ In React, useRef works the same way — it keeps a value safe between renders (even if other parts change) without causing the component to re-render or change how it looks.

*/