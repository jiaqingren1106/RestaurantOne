import { CHANGE_LOGIN, CHANGE_ROUTE } from "./constant";
const initalRouteState = {
    route: "StartUp",
}
const initalUserState = {
    username: "",
    userType: "",
    password: "",
    id: "",
    email: "",
    images: [],
    restaurant_id: ""
}

export const routeState = (state = initalRouteState, action = {}) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, { route: action.payload })
        default:
            return state
    }
}
export const userState = (state = initalUserState, action = {}) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return Object.assign({}, state, {
                username: action.payload.username,
                userType: action.payload.userType,
                password: action.payload.password,
                id: action.payload.id,
                email: action.payload.email,
                images: action.payload.images,
                restaurant_id: action.payload.restaurant_id
            })
        default:
            return state
    }
}