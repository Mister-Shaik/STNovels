import {AddChapter, GetChapter, UpdateChapter, DeleteChapter} from './Types'

export const addchapter = (name) => {
    return dispatch => {
        dispatch({type: AddChapter, Name: name});
    };
};

export const updatechapter = (ChapterId, content) => {
    return dispatch => {
        dispatch({type: UpdateChapter, Chapter: {ChapterId:ChapterId, content:content}});
    };
};

export const deletechapter = (ChapterId) => {
    return dispatch => {
        dispatch({type: DeleteChapter, Id: ChapterId});
    };
};