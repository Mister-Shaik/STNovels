import {AddPlot, GetPlot, UpdatePlot, DeletePlot} from './Types'

export const addplot = (name) => {
    return dispatch => {
        dispatch({type: AddPlot, Name: name});
    };
};

export const getplot = (PlotId) => {
    return dispatch => {
        dispatch({type: GetPlot, PlotId:PlotId});
    };
};

export const updateplot = (PlotId, content) => {
    return dispatch => {
        dispatch({type: UpdatePlot, Plot: {PlotId:PlotId, content:content}});
    };
};

export const deleteplot = (PlotId) => {
    return dispatch => {
        dispatch({type: DeletePlot, Id: PlotId});
    };
};