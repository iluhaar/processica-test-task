import React, { useReducer, useState } from 'react'
import ChatContext from './ChatContext'
import { ChatReducer } from './ChatReducer'

import { SEND_MESSAGE, SET_USER, DELETE_USER, CHAT_CREATION } from "./types"


const ChatState = ({ children }) => {

    const initialState = {
        messages: [
            // {
            //     sender: 'alsoMe',
            //     message: 'Hey yoy, bruh'
            // },
            // {
            //     sender: 'me',
            //     message: 'Hey yoy, it`s Me'
            // },
            {
                message: ''
            },
            {
                message: ''
            },
        ],
        users: [
            // {
            //     // id: 0,
            //     email:'',
            //     password: ''
            // }
        ],
        chats: [
            
        ]
    }

    const [state, dispatch] = useReducer(ChatReducer, initialState)
    const [users, setUsers] = useState([])
    const [chat, setChat] = useState([])
    
    console.log(users)
    
    const sendMessage = (text) => {
        debugger
        let msg = {
            sender: 'me',
            message: text
        }
        debugger
        let updateMessage = [...state.messages, msg]
        dispatch({
            type: SEND_MESSAGE,
            payload: updateMessage
        })
        debugger
    }

    const logIn = (email, password) => {
        debugger

        let newUser = {
            email: email,
            password: password
        }
        debugger

        let setNewUser = [...state.users, newUser]
        setUsers(setNewUser)
        dispatch({
            type: SET_USER,
            payload: setNewUser
        })
    
        debugger

    }

    const logOut = (email, password) => {
        debugger
        let logOut = {
            email:null,
            password:null
        }
        debugger
        let deleteUser = [...state.users, logOut]
        dispatch({
            type: DELETE_USER, 
            payload: deleteUser
        })
        debugger

    }
    const chatCreation = (title, description) => {
        debugger
        let chatData = {
            title:title,
            description:description
        }
        debugger
        let chatCreation = [...state.chats, chatData]
        setChat(chatCreation)
        dispatch({
            type:CHAT_CREATION,
            payload:chatCreation
        })
        debugger
    }

    return <ChatContext.Provider value={{
        messages: state.messages,
        sendMessage,
        logIn,
        logOut,
        users,
        chatCreation,
        chat
    }}
    >
        {children}
    </ChatContext.Provider>

}

export default ChatState;

