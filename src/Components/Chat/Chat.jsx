import React, { useContext, useEffect, useState } from 'react'
import { Header } from '..'
import ChatContext from '../../Context/ChatContext'
import styles from './ChatPage.module.css'
import FMessage from './FMessage'
import LMessage from './LMessage'


const Chat = () => {


    let context = useContext(ChatContext)
    let messageList = context.messages
    const [message, setMessage] = useState("")

    console.log(context.chat)
    const handleSubmit = e => {

        e.preventDefault()

        context.sendMessage(message)

        setMessage("")

    }

    return (
        <div>
            <Header />
            <h1>Hi {context?.chat?.map(title => <div>{title.title}</div>)} </h1>
            <div className={styles.chatPage_container}>
                <div className={styles.chatWindow}>
                    <div className={styles.try}>
                        <div>
                            <div>
                                {messageList.map((message, i) => {
                                    if (message.sender === 'me') {
                                        return <LMessage message={message} />
                                    } else {
                                        return <FMessage message={message} />
                                    }
                                })}
                            </div>
                        </div>


                    </div>
                </div>
                <br />
                <div className={styles.inputCon}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='type your message here' value={message} required onChange={(e) => setMessage(e.target.value)} />
                        <button >Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat
