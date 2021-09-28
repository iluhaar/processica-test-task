import React, { useContext, useEffect } from 'react'
import { Header } from '..'
import ChatContext from '../../Context/ChatContext'

const MainPage = () => {

    const context = useContext(ChatContext)
    console.log(context.users)
    useEffect(() => {
        console.log(context)
    },[context] )
    return (
        
        <div>
            <Header />
            {context.users.map(user => <div>{user.email}</div>)}
            <h1>Main page</h1>
                <h2>Henlo, dear {context.users.map(user => <div>{user.email}</div>)}</h2>
        </div>
    )
}

export default MainPage