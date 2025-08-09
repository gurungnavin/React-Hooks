import React, { useContext } from 'react'
import Contact from './Contact'
import { AppContext } from '../hooks/06-useContext/UseContext'

const Profile = () => {
  const {name} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center space-y-4 p-4 border-4 border-green-400 rounded-lg shadow-md'>
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <Contact />
    </div>
  )
}

export default Profile