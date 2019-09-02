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
                    <div className="tc">
                        <h2 className="fl tr pv2">64</h2>
                        <p className="fr pt4">0.0%</p>
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
                    <div className="tc">
                        <h2 className="fl tr pv2">8</h2>
                        <p className="fr pt4">0.0%</p>
                    </div>
                </div>
                <div className="w-25 pv3 ph4 br2 card mr3">
                    <div className="pv2">
                        <p>Avg WORDS / CH</p>
                    </div>
                    <div className="tc">
                        <h2 className="fl tr pv2">232</h2>
                        <p className="fr pt4">0.0%</p>
                    </div>
                </div>
                <div className="w-25 pv3 ph4 br2 card mr3">
                    <div className="pv2">
                        <div className="fr">
                            <select style={{border:"none"}}>
                                <option value="1" selected="">Today</option>
                                <option value="7">This Month</option>
                                <option value="30">This Year</option>
                            </select>
                        </div>
                        <p>You wrote for</p>
                    </div>
                    <div className="pv2 tc">
                        <h2>4 <span className="f3">hrs</span> 43 <span className="f3">mins</span></h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default NovelStats;