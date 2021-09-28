import React from 'react'
import { Header } from '..'

const Profile = () => {
    return (
        <div>
            <Header />
            <h1>Profile settings</h1>
            <div className="userInfo">
                <div>
                    <label htmlFor="text">Name:</label>
                    <input type="text" id="name" placeholder="type.." />
                </div>
                <div>
                    <label htmlFor="text">Last name:</label>
                    <input type="text" id="Lastname" placeholder="type.." />
                </div>
            </div>
        </div>
    )
}

export default Profile
