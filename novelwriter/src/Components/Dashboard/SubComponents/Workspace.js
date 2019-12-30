import React, { Component } from 'react';
import '../../Content.css';

class Workspace extends Component {
    render() {
        return (
            <div className="mt5 mh4 bg-white" >
                <div className="pa3">
                    <h2>My Novels</h2>
                </div>
                <div className="border-top">
                    <ul className="pa0">
                        <li class="novel-list-item pa3 f4 border-top" style={{listStyle: "none"}}>
                            <div className="pa2 bg-dark-gray white br3">
                                <a className="white hover-white text-decoration-none" href="/">Novel Name</a>
                                <span className="fr">
                                    <a className="list-del dark-gray ph4 text-decoration-none" href="/">Delete</a>
                                    <i className="fa fa-plus f5 ph3" data-toggle="collapse" data-target="#Novel1" aria-expanded="false" aria-controls="Novel1"></i>
                                </span>
                            </div>
                            <ul className="collapse" style={{listStyle:"none"}} id="Novel1">
                                <li className="chapter-list-item hover-bg-light-gray pa2 br3">
                                    <a className="black text-decoration-none" href="/">- Chapter one</a>
                                    <span className="fr">
                                        <a className="chap-del white ph4 text-decoration-none" href="/">Delete</a>
                                        <i>21-5-2019 5:55:00AM</i>
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Workspace;