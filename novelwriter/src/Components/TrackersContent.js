import React, { Component } from 'react';
import {Table} from 'reactstrap';
import './Content.css';

class TrackersContent extends Component {
    render() {
        return (
            <div className="row pa4 pt5 center bg-light-gray" style={{maxHeight:"calc(100vh - 100px)",overflowY:"auto"}}>
                <div className="col-6 tc">
                    <h4>Details</h4>
                    <div>
                        <Table className="tl" >
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td contentEditable="true" style={{wordWrap:"break-word"}} placeholder="Name"></td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td contentEditable="true" style={{wordWrap:"break-word"}} placeholder="age"></td>
                                </tr>
                                <tr>
                                    <th>Skills</th>
                                    <td contentEditable="true" style={{wordWrap:"break-word"}} placeholder="skills"></td>
                                </tr>
                            </tbody>
                        </Table>
                        <button className="btn btn-primary"><i className="fa fa-plus-circle fa-1x"> </i> Add</button>
                    </div>
                </div>
                <div className="col-6 tc center">
                    <h4>Personality</h4>
                    <div className="outline tl pa2 f4" contentEditable="true" style={{height:"120px",wordWrap:"break-word"}} />
                </div>
            </div>
        );
    }
}

export default TrackersContent;