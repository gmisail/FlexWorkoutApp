import { LOGIN, LOGOUT, CHANGE_USER_PROPERTIES, SET_ACTIVE_WORKOUT } from '../constants';

export function login(payload)
{
    return {
        type: LOGIN,
        payload
    }
}

export function logout(payload)
{
    return {
        type: LOGOUT,
        payload
    }
}

export function changeUserProperties(payload)
{
    return {
        type: CHANGE_USER_PROPERTIES,
        payload
    }
}

export function setActiveWorkout(payload)
{
    return {
        type: SET_ACTIVE_WORKOUT,
        payload
    }
}