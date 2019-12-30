import {GetUser, ChangePassword, SignOut} from '../actions/Types';

const initialState = {
    UserId: "User Id",
    UserName: "name",
    UserEmail: "email"
};

const Reducer = (state = initialState, action) => { 
    switch(action.type){
        case GetUser:
            return Object.assign({}, state, {});
        case ChangePassword:
            return Object.assign({}, state, {});
        case SignOut:
            return Object.assign({}, state, {});
    }
    return state;
};

export default Reducer;