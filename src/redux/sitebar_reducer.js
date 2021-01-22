let initialState = {
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
const sitebarReducer = (state=initialState, action) => {
    return state;
}

export default sitebarReducer;