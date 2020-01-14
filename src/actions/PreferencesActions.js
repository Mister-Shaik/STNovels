import {UpdatePreferences, GetPreferences} from './Types';

export const getpreferences = () =>{
    return dispatch => {
        dispatch({type: GetPreferences});
    };
};
export const updatepreferences = (settings) =>{
    return dispatch => {
        dispatch({type: UpdatePreferences, Preferences: settings});
    };
};