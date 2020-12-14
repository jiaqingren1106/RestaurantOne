import { CHANGE_LOGIN, CHANGE_ROUTE } from "./constant";
const initalRouteState = {
    route: "StartUp",
}
const initalUserState = () => {
    const userData = JSON.parse(localStorage.getItem("userData"))
    if (userData && userData.username !== "") {
        return userData
    } else {
        return {
            username: "",
            userType: "",
            password: "",
            id: "",
            email: "",
            images: [],
            restaurant_id: "",
            reviews: [],
            follows: []
        }
    }
}

const initialUser = initalUserState()

export const routeState = (state = initalRouteState, action = {}) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, { route: action.payload })
        default:
            return state
    }
}
export const userState = (state = initialUser, action = {}) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return Object.assign({}, state, {
                username: action.payload.username,
                userType: action.payload.userType,
                password: action.payload.password,
                id: action.payload.id,
                email: action.payload.email,
                images: action.payload.images,
                restaurant_id: action.payload.restaurant_id,
                reviews: action.payload.reviews,
                follows: action.payload.follows,
            })
        default:
            return state
    }
}