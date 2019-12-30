import {GetAllNovels, GetNovelNames, GetNovel, GetNovelStats, AddNovel, DeleteNovel} from './Types';

export const getallnovels = () =>{
    return dispatch => {
        dispatch({type: GetAllNovels});
    };
};
export const getnovelnames = () =>{
    return dispatch => {
        dispatch({type: GetNovelNames});
    };
};
export const getnovel = () =>{
    return dispatch => {
        dispatch({type: GetNovel});
    };
};
export const getnovelstats = () =>{
    return dispatch => {
        dispatch({type: GetNovelStats});
    };
};
export const addnovel = (Name) =>{
    return dispatch => {
        dispatch({type: AddNovel, Name: Name});
    };
};
export const deletenovel = (NovelId) => {
    return dispatch => {
        dispatch({type: DeleteNovel, Id: NovelId});
    };
};