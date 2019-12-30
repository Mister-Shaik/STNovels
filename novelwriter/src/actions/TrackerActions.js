import {AddTracker, AddTrackerElement, UpdateTrackerElement, DeleteTracker, DeleteTrackerElement} from './Types';


export const addtracker = (Name) => {
    return dispatch => {
        dispatch({type: AddTracker, Name: Name});
    };
};

export const addtrackerelement = (TrackerId, Element) => {
    return dispatch => {
        dispatch({type: AddTrackerElement, TrackerId: TrackerId, Element: Element});
    };
};

export const updatetrackerelement = (TrackerId, ElementId, Element) => {
    return dispatch => {
        dispatch({type: UpdateTrackerElement, TrackerId: TrackerId, ElementId: ElementId, Element: Element});
    };
};

export const deletetracker = (TrackerId) => {
    return dispatch => {
        dispatch({type: DeleteTracker, Id: TrackerId});
    };
};

export const deletetrackerelement = (TrackerId, ElementId) => {
    return dispatch => {
        dispatch({type: DeleteTrackerElement, TrackerId: TrackerId, ElementId: ElementId});
    };
};