import React from 'react'
import PersonalDetails from './PersonalDetails'

const Contact = () => {
  return (
    <div className='flex flex-col items-center space-y-4 p-4 border-4 border-orange-400 rounded-lg shadow-md'>
      <h2>Contact Information</h2>
      <PersonalDetails />
      </div>
  )
}

export default Contact