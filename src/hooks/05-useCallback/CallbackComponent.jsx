import React, { useState } from 'react'

const CallbackComponent = ({number, setNumber}) => {
  
  return (
    <div>
         <div className="space-y-2">
          <p className="text-gray-700 text-lg">Number: <span className="font-semibold text-blue-600">{number}</span></p>
          <button
            onClick={() => setNumber(prev => prev + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Increment Number
          </button>
        </div>
    </div>
  )
}

export default CallbackComponent