import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}


//state = previous state
//action =  action.type, action.payload from user.actions.js
//if state is ever undefined, then = initial_state. Null!=undefined
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, //everything else on the state plus:
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;