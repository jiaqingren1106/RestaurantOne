import {CHANGE_LOGIN, CHANGE_ROUTE} from "./constant";

export const setRoute = (route) => {
    console.log("set route is running")
    return {
        type: CHANGE_ROUTE,
        payload: route
    }
}



export const register = (user) => (
    {
        type: CHANGE_LOGIN,
        payload: user
    }
)