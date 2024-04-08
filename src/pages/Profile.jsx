import React from 'react'
import { UserAuth } from '../context/AuthContext'

function Profile() {

const{user}=UserAuth()

  return (
    <div>
    <div className="mx-auto sm:w-4/4 md:w-2/4  absolute" id="signin-success-message">
        
           <h1>user :{user.email}</h1>
    </div>
    <div>
    ...
    </div>
</div>
  )

}

export default Profile
