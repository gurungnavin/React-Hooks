import { useState } from "react"

const UseStateOject = () => {

  const[people, setPeople] = useState({
    name : "Tanaka",
    age : 32,
    address : "Shinagawa, Tokyo",
    email: "tanaka@gmail.com"
  })

  const [inputName, setInputName] = useState("")


  const nameChangeHandler = () => {
    setPeople((prev)=>{
      return {...prev, name : inputName}
    }) 
  }

  return (
    <div>
      <h4>Name: {people.name}</h4>
      <p>Age: {people.age} years old</p>
      <p>Address: {people.address}</p>
      <p>Email: {people.email}</p>
      <input 
        type="text"
        value={inputName}
        onChange={(e)=> setInputName(e.target.value)}
        placeholder="Enter your name"
        className="border px-2 py-1 rounded mr-2 bg-white"
      />
      <button
       className="bg-white py-1 px-2 mt-2 rounded cursor-pointer"
       onClick={nameChangeHandler}
       >Submit</button>
    </div>
  )
}

export default UseStateOject