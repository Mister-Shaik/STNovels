import {UpdatePreferences, GetPreferences} from '../actions/Types';

const initialState = {
    WritingMode: "Day/Night",
    FontSize: "22px",
    CurseWords: true,
    AutoIndent: true,
    AutoFill: true,
    ChapNumbers: true
};

const Reducer = (state = initialState, action) => { 
    switch(action.type){
        case UpdatePreferences:
            return Object.assign({}, state, {});
        case GetPreferences:
            return Object.assign({}, state, {});
        default:
            break;
    }
    return state;
};

export default Reducer;