import React, { useReducer, useState } from 'react'
import ChatContext from './ChatContext'
import { ChatReducer } from './ChatReducer'
import { SEND_MESSAGE, SET_USER, DELETE_USER, CHAT_CREATION, SET_PROFILE_INFO } from "./types"
import Immutable from 'immutable'

const ChatState = ({ children }) => {


    const immutableState = Immutable.Map({
        messages: [
            {
                sender: 'alsoMe',
                message: 'Hey yoy, bruh'
            },
            {
                sender: 'me',
                message: 'Hey yoy, It`s me'
            },
        ],
        profile: [
            {

            }
        ],
        chats: [
            {
                title: '',
                description: ''

            }

        ],
        user: [],

    })

    const [state, dispatch] = useReducer(ChatReducer, immutableState)
    const [message, setNewMessage] = useState([])
    const [chat, setChat] = useState([])
    const [user, setUser] = useState([])
    const [newProfileData, setNewProfileData] = useState([])

    const sendMessage = (text, bool) => {
        let msg = {
            sender: bool,
            message: text
        }
        switch (bool) {
            case true: 
                setTimeout(() => {
                    let updateMessage = immutableState.set('messages', { bool, text })
                    message.push(msg)
                    dispatch({
                        type: SEND_MESSAGE,
                        payload: updateMessage
                    })
                }, 1000)
            break
            case false: 
                let updateMessage = immutableState.set('messages', { bool, text })
                message.push(msg)
                dispatch({
                    type: SEND_MESSAGE,
                    payload: updateMessage
                })
            break
            default:
                return immutableState
        }

    }

    const logIn = (email, password) => {
        let newUser = {
            email: email,
            password: password
        }

        let setNewUser = immutableState.set("user", newUser)
        setUser(setNewUser.get('user'))
        dispatch({
            type: SET_USER,
            payload: setNewUser
        })

    }

    const logOut = (email, password) => {
        let logOut = {
            email: null,
            password: null
        }
        let deleteUser = immutableState.set("user", logOut)
        dispatch({
            type: DELETE_USER,
            payload: deleteUser
        })

    }
    const chatCreation = (title, description) => {
        let chatData = {
            title: title,
            description: description
        }
        let chatCreation = immutableState.set("chats", chatData)
        setChat(chatCreation.get('chats'))
        setNewMessage([])
        dispatch({
            type: CHAT_CREATION,
            payload: chatCreation
        })
    }

    const setUserInfo = (name, lName) => {
        let userInfo = {
            name: name,
            lName: lName
        }

        let setUserInfo = immutableState.set("profile", userInfo)
        setNewProfileData(setUserInfo.get("profile"))
        dispatch({
            type: SET_PROFILE_INFO,
            payload: setUserInfo
        })
    }

    return <ChatContext.Provider value={{
        messages: message,
        users: state.users,
        sendMessage,
        logIn,
        logOut,
        chatCreation,
        chat: chat,
        user,
        setUserInfo,
        newProfileData

    }}
    >
        {children}
    </ChatContext.Provider>

}

export default ChatState;

