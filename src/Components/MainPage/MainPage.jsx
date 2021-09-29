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
                <h3>Henlo, dear {context.user.map(user => <div>{user.email}</div>)}</h3>
        </div>
    )
}

export default MainPage
