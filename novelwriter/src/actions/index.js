import {ToggleSideBar} from './Types';

export const togglesidebar = () => {
    return dispatch => {
        dispatch({type: ToggleSideBar});
    };
};