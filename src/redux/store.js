import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sitebarReducer from "./sitebar_reducer";

let store = {
    _state: {
        profilePage: {
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
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sitebarPage: {
            svetaInfo: [
                {
                    srcId: 'https://img1.hochu.ua/uploads/6a/0f/de/6a0fde55-61f5-40dc-a25b-761800540ca6_360x300_fit.jpg',
                    name: 'Sveta',
                    dateOfBirth: '22 may',
                    city: 'Dnepr',
                    education: 'OONP'
                }
            ],
            andreyInfo: [
                {
                    srcId: 'https://instagrammi.ru/wp-content/uploads/arnold-shvarcenegger.jpg',
                    name: 'Andrey',
                    dateOfBirth: '05 october',
                    city: 'Odessa',
                    education: 'HDAA'
                }
            ],
            dimychInfo: [
                {
                    srcId: 'https://resizer.mail.ru/p/e02b3128-a0c2-50f3-88bf-ef03d14c8860/AAACwvKOlG5dTxJm6PB7VaQwIrpUMYitNe_M-kmNOGv0lnAk6t_rlXLrvNeQ0mij3cC1BgbtMymYs0bJstI5ob5-4IY.jpg',
                    name: 'Dimych',
                    dateOfBirth: '14 may',
                    city: 'Dnepr',
                    education: 'LIJEU'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sitebarPage = sitebarReducer(this._state.sitebarPage, action)
        this._callSubscriber(this._state);
    }
}

export default store;

// [
//     {id: 1, photoUrl: 'https://wsjournal.ru/wp-content/uploads/2016/08/doc63bprnt2j1416ghtqit_800_480-300x215.jpg', followed: true, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
//     {id: 2, photoUrl: 'https://wsjournal.ru/wp-content/uploads/2016/08/374758_2_1362480463-300x188.jpg', followed: false, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
//     {id: 3, photoUrl: 'https://wsjournal.ru/wp-content/uploads/2016/08/Evolyutsiya-Mark-Uolberg-1024x683-300x200.jpg', followed: true, fullName: 'Dimych', status: 'I am so pretty', location: {city: 'Dnepr', country: 'Ukraine'}},
//     {id: 4, photoUrl: 'https://wsjournal.ru/wp-content/uploads/2016/08/8b263aefbd910b902805a6cb3ff9c6d5-300x201.jpg ', followed: true, fullName: 'Andrew', status: 'I like football!', location: {city: 'Kiev', country: 'Ukraine'}}
// ]