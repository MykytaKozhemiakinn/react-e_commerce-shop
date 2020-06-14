import { userActions } from './user-constants'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case userActions.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            default:
                return state;
    }
}
export default userReducer;