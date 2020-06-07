import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}


//state = previous state
//action =  action.type, action.payload from user.actions.js
//if state is ever undefined, then = initial_state. Null!=undefined
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state, //everything else on the state plus:
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        default:
            return state;
    }
}

export default userReducer;