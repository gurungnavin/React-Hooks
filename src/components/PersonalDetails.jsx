import React, { useContext } from 'react'
import { AppContext } from '../hooks/06-useContext/UseContext'

const PersonalDetails = () => {
  const {name, phone} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center space-y-4 p-4 border-4 border-blue-400 rounded-lg shadow-md'>
      <h4 className='text-2xl'>Personal Details</h4>
      <div>
        <p className='font-light text-xl'>Name : {name}</p>
        <p className='font-light text-xl'>Phone No. : {phone}</p>
      </div>
    </div>
  )
}

export default PersonalDetails