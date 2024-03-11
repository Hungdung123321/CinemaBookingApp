export const APP_BUTTON_MODE = {
    LIGHT: 1,
    DARK: 2,
    TRANSPARENT: 3,
    IC_ONLY: 4
}

export const SEAT_STATUS = {
    ALVAILBLE: 1,
    OCCUPIED: 2,
    CHOSEN: 3,
}

export const AuthKeys = {
    LOGIN: 'Login',
    SMS: 'Sms'
}

export const AuthRoutes = [
    { key: AuthKeys.LOGIN, title: 'Continue' },
    { key: AuthKeys.SMS, title: 'Login' },
]

export const MovieKeys = {
    ABOUT: 'About',
    SESSIONS: 'Sessions'
}

export const MovieRoutes = [
    { key: MovieKeys.ABOUT, title: 'About' },
    { key: MovieKeys.SESSIONS, title: 'Sessions' },
]

export const LIST_SEAT_TYPE = [
    {
        name: 'Adult',
        price: 2200,
    },
    {
        name: 'Child',
        price: 1000,
    },
    {
        name: 'Student',
        price: 1500,
    },
]

export const SEATS_COLLUM = 10