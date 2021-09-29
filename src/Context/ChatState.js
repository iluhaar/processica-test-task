import React, { useReducer, useState } from 'react'
import ChatContext from './ChatContext'
import { ChatReducer } from './ChatReducer'

import { SEND_MESSAGE, SET_USER, DELETE_USER, CHAT_CREATION, SET_PROFILE_INFO  } from "./types"


const ChatState = ({ children }) => {

    const initialState = {
        messages: [
            {
                sender: 'alsoMe',
                message: 'Hey yoy, bruh'
            },
        ],
        users: [
        ],
        chats: [
            {
                
            }
            
        ],
        user: [],
    }

    const [state, dispatch] = useReducer(ChatReducer, initialState)
    const [users, setUsers] = useState([])
    const [chat, setChat] = useState([])
    const [user, setUser] = useState([])
    const [newProfileData, setNewProfileData] = useState([])
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
        setUser(setNewUser)
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
        let chatData = {
            title:title,
            description:description
        }
        let chatCreation = [...state.chats, chatData]
        setChat(chatCreation)
        dispatch({
            type:CHAT_CREATION,
            payload:chatCreation
        })
    }

    const setUserInfo = (name, lName) => {
        debugger
        let userInfo = {
            name:name, 
            lName:lName
        }
        debugger
        let setUserInfo = [...state.user, userInfo] 
        debugger
        setNewProfileData(setUserInfo)
        dispatch({
            type:SET_PROFILE_INFO,
            payload: setUserInfo
        })
        debugger
    }

    return <ChatContext.Provider value={{
        messages: state.messages,
        users:state.users,
        sendMessage,
        logIn,
        logOut,
        chatCreation,
        chat,
        user,
        setUserInfo,
        newProfileData

    }}
    >
        {children}
    </ChatContext.Provider>

}

export default ChatState;

