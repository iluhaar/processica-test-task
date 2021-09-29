import { CHAT_CREATION, DELETE_USER, SEND_MESSAGE, SET_USER, SET_PROFILE_INFO } from "./types"

export const ChatReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: action.payload
            }
        case CHAT_CREATION:
            return {
                ...state,
                chats: action.payload
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}