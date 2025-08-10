import React from 'react'
import useLocalStorage from '../../hook/useLocalStorage'


const CustomHook = () => {

  const [name, setName] = useLocalStorage("username", '')
  const [userid, setUserid] = useLocalStorage("userId", '')
  return (
     <div className="flex justify-center items-center">
      <div className="bg-white shadow-md rounded-4xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Custom Hook Example</h1>

        {/* ID Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">User ID</label>
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            placeholder="Enter your ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Full Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Output */}
        <div className="mt-6">
          <p className="text-gray-700">Your User-ID is: <span className="font-semibold">{userid}</span></p>
          <p className="text-gray-700">Your Full Name is: <span className="font-semibold">{name}</span></p>
          <p className="text-sm text-gray-500 mt-2">Check your local storage for the saved data.</p>
        </div>
      </div>
    </div>
  )
}

export default CustomHook