import { useState } from "react"

const StateExample = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = (e) => {
    setCount((e) => e + 1);
  }
  const handleDecrement = (e) => {
    setCount((e) => e - 1);
  }
  return (
    <div className="bg-yellow-300 flex justify-center items-center">
      <div className=" w-56 h-40 p-11 flex flex-col items-center gap-8">
        <h3 className="text-xl uppercase font-semibold bg-white px-4">count: {count <= 0 ? 0 : count}</h3>
        <div className="flex gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDecrement}
          >Decrement</button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleIncrement}>Increment</button>
        </div>
        <div>
          <h3 className="bg-white px-5 text-red-400 font-bold uppercase">{count <= 0 ? "" : count}</h3>
        </div>
        <h2>{count <= 0 ? 0 : count}</h2>
      </div>
    </div>
  )
}
export default StateExample