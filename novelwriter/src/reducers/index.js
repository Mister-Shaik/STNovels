import {combineReducers} from 'redux'
import NovelReducer from './NovelReducer'
import PreferencesReducer from './PreferencesReducer'
import UserReducer from './UserReducer'
import NavigationReducer from './NavigationReducer'
import { routerReducer } from 'react-router-redux'


export default combineReducers({
    Novels: NovelReducer,
    Preferences: PreferencesReducer,
    User: UserReducer,
    Navigation: NavigationReducer,
    routing: routerReducer
});