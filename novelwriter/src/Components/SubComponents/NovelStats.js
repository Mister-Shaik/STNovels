import React, { Component } from 'react';

class NovelStats extends Component {
    constructor(){
        super()
        this.state = {
            novel:"",
            words:[1002,5202,10253],
            chapters:[22,12,18],
            time:[[5,63],[6,24],[25,66]],
            cword:0,
            cchap:0,
            ctime:0
        }
    }
    render() {
        return (
            <div className="pt2 pb2 ph4 flex flex-wrap justify-content-between">
                <div className="w-30 pt4 pb2 ph3 br2 card mr3 mv3">
                    <div className="pv2">
                        <div className="fr">
                            <select className="select-css" onChange={e => this.setState({cword:e.target.value})}>
                                <option value="0">Today</option>
                                <option value="1">Last week</option>
                                <option value="2">Last Month</option>
                            </select>
                        </div>
                        <p>WORD COUNT</p>
                    </div>
                    <div className="tc">
                        <h2 className="f2 pv2">{this.state.words[this.state.cword]}</h2>
                        <p className="fr pt4">0.0%</p>
                    </div>
                </div>
                <div className="w-30 pt4 pb2 ph3 br2 card mr3 mv3">
                    <div className="pv2">
                        <div className="fr">
                            <select className="select-css" onChange={e => this.setState({cchap:e.target.value})}>
                                <option value="0">All</option>
                                <option value="1">Last week</option>
                                <option value="2">Last Month</option>
                            </select>
                        </div>
                        <p>TOTAL CHAPTERS</p>
                    </div>
                    <div className="tc">
                        <h2 className="f2 pv2">{this.state.chapters[this.state.cchap]}</h2>
                        <p className="fr pt4">0.0%</p>
                    </div>
                </div>
                <div className="w-30 pt4 pb2 ph3 br2 card mr3 mv3">
                    <div className="pv2">
                        <p>Avg WORDS / CH</p>
                    </div>
                    <div className="tc">
                        <h2 className="f2 pv2">232</h2>
                        <p className="fr pt4">0.0%</p>
                    </div>
                </div>
                <div className="w-30 pt4 pb2 ph3 br2 card mr3 mv3">
                    <div className="pv2">
                        <div className="fr">
                            <select  className="select-css" onChange={e => this.setState({ctime:e.target.value})}>
                                <option value="0">Today</option>
                                <option value="1">This Month</option>
                                <option value="2">This Year</option>
                            </select>
                        </div>
                        <p>Total</p>
                    </div>
                    <div className="pv2 tc">
                        <h2>{this.state.time[this.state.ctime][0]} <span className="f3">hrs</span> {this.state.time[this.state.ctime][1]} <span className="f3">mins</span></h2>
                        <p className="gray fr pt4"><abbr title="Total Time Spent on Writing the Novel">?</abbr></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NovelStats;