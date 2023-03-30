import React from 'react'
import user from "../assets/adams.jpg"

function Profile() {
    let loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(loggedInUser)
    return (
    <div className='profile'>
        <div className="profile-left">
            <img src={loggedInUser.providerData[0].photoURL} alt="" />
            <br />
            <h3>{loggedInUser.providerData[0].displayName}</h3>
            <p><strong>{loggedInUser.providerData[0].email}</strong></p>
        </div>

        <div className="profile-right">
            <div className="stats">
                <h6>2</h6>
                <p>Questions asked</p>
            </div>
            <div className="stats">
                <h6>2</h6>
                <p>Questions answered</p>
            </div>
        </div>
    </div>
  )
}

export default Profile