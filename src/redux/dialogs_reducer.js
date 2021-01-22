const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Alexey'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Dimych'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are your it-study?!'},
        {id: 3, message: 'Cool!!!'}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {...state, messages: [...state.messages, {id: 4, message: body}]}
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;