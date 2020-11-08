import {CHANGE_LOGIN, CHANGE_ROUTE} from "./constant";
const initalState = {
    route: "StartUp",
    user: ""
}

export const appState = (state=initalState, action={}) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, {route: action.payload})
        case CHANGE_LOGIN:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state
    }
}