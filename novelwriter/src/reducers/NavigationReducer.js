import {ToggleSideBar, OpenSideElement, GotoNovel, GotoDashboard, DashboardNav} from '../actions/Types';

const initialState = {
    SideMenuVisible: true,
    SideElementVisible: true,
    CurrentPage: "Novel",
    CurrentOption: "Preferences",
    CurrentNovel: "Novel Name"
};

const Reducer = (state = initialState, action) => { 
    switch(action.type){
        case ToggleSideBar:
            return Object.assign({}, state, {
                SideMenuVisible: !state.SideMenuVisible
            });
        case OpenSideElement:
            return Object.assign({}, state, {
                SideElementVisible: !state.SideElementVisible
            });
        case GotoNovel:
            return Object.assign({}, state, {});
        case GotoDashboard:
            return Object.assign({}, state, {});
        case DashboardNav:
            return Object.assign({}, state, {});
    }
    return state;
};

export default Reducer;