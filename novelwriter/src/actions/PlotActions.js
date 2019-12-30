import {AddPlot, UpdatePlot, DeletePlot} from './Types'

export const addplot = (name) => {
    return dispatch => {
        dispatch({type: AddPlot, Name: name});
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