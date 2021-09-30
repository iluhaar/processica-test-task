import React, { useContext, useState } from 'react'
import { Header } from '..'
import ChatContext from '../../Context/ChatContext'
import styles from './ChatPage.module.css'
import FMessage from './FMessage'
import LMessage from './LMessage'


const Chat = () => {


    let context = useContext(ChatContext)
    let messageList = context.messages
    const [message, setMessage] = useState("")
    const [senderMe, setSenderMe] = useState(true)
    const handleSubmit = e => {
        let bool = true
        e.preventDefault()
        context.sendMessage(message, bool = !senderMe)
        setSenderMe(bool)
        setMessage("")

    }


    // I tried to use reactive virtualized, but I was having problems rendering data to List, so I did not implement it.
    // This is quite an interesting task, I learned a thing or two from here, thanks
 
 
    return (
        <div>
            <Header />
            <h1>Hi, {context.chat.title === undefined ? <div>Bruh</div> : <div>{context.chat.title}</div>} </h1>
            <div className={styles.chatPage_container}>
                <div className={styles.chatWindow}>
                    <div className={styles.message_container}>
                        <div>
                            <div>
                                {messageList?.map((message, i) => {
                                    if (message.sender === true) {
                                        return <FMessage key={i} message={message.message} />
                                    } else {
                                        return <LMessage key={i} message={message.message} />
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
