import { LOGIN, LOGOUT, CHANGE_USER_PROPERTIES, SET_ACTIVE_WORKOUT } from '../constants';

const initialState = {
    user: {

    },

    activeWorkout: {

    },

    authenticated: false
};

function rootReducer(state = initialState, action)
{
    if(action.type === LOGIN)
    {
        return Object.assign({}, state, {
            user: action.payload,
            authenticated: true
        });
    }

    if(action.type === LOGOUT)
    {
        return Object.assign({}, state, {
            user: {},
            authenticated: false
        });
    }

    if(action.type === CHANGE_USER_PROPERTIES)
    {
        return Object.assign({}, state, {
            user: action.payload,
            authenticated: true
        });
    }

    if(action.type === SET_ACTIVE_WORKOUT)
    {
        return Object.assign({}, state, {
            activeWorkout: action.payload
        });
    }

    return state;
}

export default rootReducer;