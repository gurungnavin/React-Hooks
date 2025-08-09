import { useRef } from "react"

const UseRefDomExample = () => {

  const inputElement = useRef("")

  const refHandler = () => {
    // console.log(inputElement.current)
   if(inputElement.current) {
     inputElement.current.classList.add('bg-white')
     inputElement.current.focus();
     inputElement.current.placeholder = "useRef mode on"
   }
    
  }

  return (
    <div>
      <input
      className=" border rounded pl-2 pr-2 py-2"
      placeholder="Enter Something"
      ref={inputElement}
      type="text" />
      <button className="ml-3 bg-amber-50 p-2 rounded hover:bg-amber-200" onClick={refHandler}>Click</button>
    </div>
  )
}

export default UseRefDomExample