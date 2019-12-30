import {AddNovel, GetAllNovels, GetNovelNames, GetNovelStats, GetNovel, DeleteNovel,
        AddChapter, UpdateChapter, DeleteChapter,
        AddPlot, UpdatePlot, DeletePlot,
        AddTracker, AddTrackerElement, UpdateTrackerElement, DeleteTracker, DeleteTrackerElement} from '../actions/Types';


const initialState = {
    AllNovels:[
        {
            Id:"001",
            NovelName:"Novel one",
            Chapters:[{Id:"001", Name:"Chapter 1"},{Id:"002", Name:"Chapter 2"},{Id:"003", Name:"Chapter 3"},{Id:"004", Name:"Chapter 5"}]
        },
        {
            Id:"001",
            NovelName:"Second Novel",
            Chapters:[{Id:"001", Name:"Chapter 1"},{Id:"002", Name:"Chapter 2"},{Id:"003", Name:"Chapter 3"},{Id:"004", Name:"Chapter 5"}]
        },
        {
            Id:"001",
            NovelName:"Third Novel",
            Chapters:[{Id:"001", Name:"Chapter 1"},{Id:"002", Name:"Chapter 2"},{Id:"003", Name:"Chapter 3"},{Id:"004", Name:"Chapter 5"}]
        }
    ],
    Novel: {
        Name: "Novel Name",
        CreatedOn: "Date",
        Chapters: [
            {
                Id: "001",
                Name: "Chapter 1",
                CreatedOn: "Date",
                LastEdited: "Date",
                Content: "Chapter Content"
            },
            {
                Id: "002",
                Name: "Chapter 2",
                CreatedOn: "Date",
                LastEdited: "Date",
                Content: "Chapter Content"
            },
            {
                Id: "003",
                Name: "Chapter 3",
                CreatedOn: "Date",
                LastEdited: "Date",
                Content: "Chapter Content"
            }
        ],
        Plots: [{
            Id: "001",
            Name: "Plot Name",
            Content: "Plot Content"
        }
        ],
        Trackers: [
            {
                Id:"001",
                TrackerName: "Tracker Name",
                Elements: [
                    {
                        Id:"001",
                        Content:{}
                    }]
            }]
    }
};

const Reducer = (state = initialState, action) => { 
    switch(action.type){
        case AddNovel:
            return Object.assign({}, state, {});
        case GetNovelNames:
            return Object.assign({}, state, {});
        case GetAllNovels:
            return Object.assign({}, state, {});
        case GetNovelStats:
            return Object.assign({}, state, {});
        case GetNovel:
            return Object.assign({}, state, {});
        case DeleteNovel:
            return Object.assign({}, state, {});
        case AddChapter:
            return Object.assign({}, state, {});
        case UpdateChapter:
            return Object.assign({}, state, {});
        case DeleteChapter:
            return Object.assign({}, state, {});
        case AddPlot:
            return Object.assign({}, state, {});
        case UpdatePlot:
            return Object.assign({}, state, {});
        case DeletePlot:
            return Object.assign({}, state, {});
        case AddTracker:
            return Object.assign({}, state, {});
        case AddTrackerElement:
            return Object.assign({}, state, {});
        case UpdateTrackerElement:
            return Object.assign({}, state, {});
        case DeleteTracker:
            return Object.assign({}, state, {});
        case DeleteTrackerElement:
            return Object.assign({}, state, {});
    }
    return state;
};

export default Reducer;