import React, { useContext, useState } from 'react'
import { Header } from '..'
import ChatContext from '../../Context/ChatContext'
import styles from './Profile.module.css'

const Profile = () => {

    const context = useContext(ChatContext)
    const [name, setName] = useState('')
    const [lName, setLName] = useState('')

    const handleSave = (e) => {
        e.preventDefault()
        context.setUserInfo(name, lName)
        localStorage.setItem('name', name)
        localStorage.setItem('lName', lName)
        setName('')
        setLName('')
    }
    return (
        <div>
            <Header />
            <h1>Profile settings</h1>
            <div className={styles.userInfo}>
                <div className={styles.detailedInfo}>
                    <div>
                    <label htmlFor="text"> Name:
                        {context.newProfileData.name}
                    </label>
                    </div>
                    <div>
                    <label htmlFor="text"> Last name:
                    {context.newProfileData.lName}
                    </label>
                    </div>
                </div>
                <div className={styles.form_container}>
                    <form onSubmit={handleSave}>
                        <div>
                            <label htmlFor="text">Name:</label>
                            <input type="text" id="name" placeholder="type.." value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="text">Last name:</label>
                            <input type="text" id="Lastname" value={lName} placeholder="type.." onChange={(e) => setLName(e.target.value)} />
                        </div>
                        <button>Save</button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Profile
