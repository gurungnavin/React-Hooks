import React, { useEffect, useState } from 'react'

const UseEffectExample01 = () => {
  const [count, setCount] = useState(0);

  // without dependencies

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);
  // });

  // useEffect with empty dependencies []: runs only once after initial render

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);
  // });

  // // with Dependencies "count", we can also add other value as dependencies

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);
  // }, [count]);

  return (
    <div>
      <h3>I have Rendered <span className='text-4xl font-bold'>{count}</span>Times</h3>
    </div>
  )
}

export default UseEffectExample01