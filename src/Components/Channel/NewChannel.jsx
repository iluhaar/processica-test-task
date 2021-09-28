import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import ChatContext from '../../Context/ChatContext'
import styles from './NewChannel.module.css'


const NewChannel = () => {
   
    const context = useContext(ChatContext)
    const [title, setChatTitle] = useState()
    const [description, setChatDesc] = useState()
    let history = useHistory();

    const handleButtonClick = (e) => {
        e.preventDefault()
        context.chatCreation(title, description)
        localStorage.setItem('title', title)
        localStorage.setItem('desc', description)
        history.push(`/chat/${title}`)
    }

    return (
        <div>
            <h1>Channel creation</h1>
            <form>
                <div>
                    <div className={styles.formInputs}>
                        <div>
                            <input type="text" placeholder='channel Title' id='chatTitle' required onChange={(e) => setChatTitle(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" placeholder='channel Description' id='chatDisc' required onChange={(e) => setChatDesc(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <button onClick={handleButtonClick}>Create channel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewChannel
