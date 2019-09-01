import React, { Component } from 'react';

class NovelStats extends Component {
    render() {
        return (
            <div className="pt4 pb2 ph6 flex flex-row justify-start ">
                <div className="w-25 ph4 pv3 br2 card mr3">
                    <div className="pv2">
                        <div className="fr">
                            <select>
                                <option value="1" selected="">Today</option>
                                <option value="7">Last week</option>
                                <option value="30">Last Month</option>
                            </select>
                        </div>
                        <p>WORD COUNT</p>
                    </div>
                    <div className="pv3">
                        <h2>60</h2>
                    </div>
                </div>
                <div className="w-25 pv3 ph4 br2 card mr3">
                    <div className="pv2">
                        <div className="fr">
                            <select>
                                <option value="1" selected="">All</option>
                                <option value="7">Last week</option>
                                <option value="30">Last Month</option>
                            </select>
                        </div>
                        <p>TOTAL CHAPTERS</p>
                    </div>
                    <div>
                        <h2 className="fl pv2">8</h2>
                        <p className="fr pt4">0.0%</p>
                    </div>
                </div>
                <div className="w-25 pv3 ph4 br2 card mr3">
                    <div className="pv2">
                        <p>Avg WORDS / CH</p>
                    </div>
                    <div className="pv3">
                        <h2>8</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default NovelStats;