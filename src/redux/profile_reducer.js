import {profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: ' 15'},
        {id: 2, message: 'It\'s my first post', likesCount: ' 20'}
    ],
    myInfo: [
        {
            srcId: 'https://media.vashdosug.ru/media/751356/412x352/',
            name: 'Alexey',
            dateOfBirth: '24 april',
            city: 'Odessa',
            education: 'DNU'
        }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let text = action.newPostText
            return {...state, posts: [...state.posts, {id: 3, message: text, likesCount: ' 0'}]}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.getStatus(status).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
    }
}


export default profileReducer;