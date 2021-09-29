import React, { useContext, useState } from 'react'
import { Header } from '..'
import ChatContext from '../../Context/ChatContext'
import styles from './ChatPage.module.css'
import FMessage from './FMessage'
import LMessage from './LMessage'
import List from 'react-virtualized/dist/commonjs/List';


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

    const pro = [
        'sadasd',
        'sadasd231',
        'sadasd231',
        'sadasd23',
        'sada21sd',
        'sadas213434d',
        'sadasd35',
        'sadasd35',
        'sadasd35',
        'sadasd34',

    ]

    let smth = ({ key, index, isScrolling, isVisible, style }) => {
        return (
            <div key={key}>{pro[index]}</div>
        )
    }

    return (
        <div>
            <Header />

            {/* <List width={500}
                height={500}
                rowCount={pro.length}
                rowHeight={20}
                rowRenderer={smth}
                isScrolling
            /> */}
            <h1>Hi, {context.chat.title === '' ? <div>Bruh</div> : <div>{context.chat.title}</div>} </h1>
            {/* <h1>Hi {context?.chat?.map(title => <div>{title.title}</div>)} </h1> */}
            <div className={styles.chatPage_container}>
                <div className={styles.chatWindow}>
                    <div className={styles.try}>
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
