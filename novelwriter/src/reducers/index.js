import {ToggleSideBar } from "../actions/Types";

const initialState = {
    SideMenuVisible : true
    }

const rootReducer = (state = initialState, action) => { 
    if(action.type === ToggleSideBar){
        return Object.assign({}, state, {SideMenuVisible : !state.SideMenuVisible})
    }
    return state;
};

export default rootReducer;