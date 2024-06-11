import React from 'react'
import useAuth from "../hooks/useAuth";

function Profile() {
  const {user} = useAuth()
  return (
    <div>
      <h1>Profile</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default Profile