import {CHANGE_LOGIN, CHANGE_ROUTE} from "./constant";

export const setRoute = (route) => (
    {
        type: CHANGE_ROUTE,
        payload: route
    }
)

export const changeLogin = (user) => (
    {
        type: CHANGE_LOGIN,
        payload: user
    }
)