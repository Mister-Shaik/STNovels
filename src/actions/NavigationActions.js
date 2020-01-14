import {OpenSideElement, ToggleSideBar, GotoNovel, GotoDashboard, DashboardNav} from './Types';

export const togglesidebar = () => {
    return dispatch => {
        dispatch({type: ToggleSideBar});
    };
};

export const opensideelement = () => {
    return dispatch => {
        dispatch({type: OpenSideElement});
    };
};

export const gotonovel = () => {
    return dispatch => {
        dispatch({type: GotoNovel});
    };
};

export const gotodashboard = () => {
    return dispatch => {
        dispatch({type: GotoDashboard});
    };
};

export const dashboardnav = (option) => {
    return dispatch => {
        dispatch({type: DashboardNav, option});
    };
};