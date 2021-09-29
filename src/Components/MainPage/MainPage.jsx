import React, { useContext, useEffect } from 'react'
import { Header } from '..'
import ChatContext from '../../Context/ChatContext'

const MainPage = () => {

    const context = useContext(ChatContext)
    useEffect(() => {
        console.log(context.user)
    },[context] )
    return (
        
        <div>
            <Header />
            {/* {context.users.map(user => <div>{user.email}</div>)} */}
            <h1>Main page</h1>
                <h2>Hello, dear {context.user.email}</h2>
        </div>
    )
}

export default MainPage
