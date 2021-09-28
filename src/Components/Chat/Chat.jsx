import React, { useContext, useEffect, useState } from 'react'
import { Header } from '..'
import ChatContext from '../../Context/ChatContext'
import styles from './ChatPage.module.css'
import Message from './Message'


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
                    <div >
                        <div className={styles.message}>
                            {/* {messageList?.map((message, i) => (
                                <div key={i}>{message.message}</div>
                            ))} */}
                            {messageList?.map((message, i) => <Message key={i} message={message} />)}
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
