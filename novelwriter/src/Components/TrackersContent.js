import React, { Component } from 'react';
import {Table} from 'reactstrap';
import './Content.css';

class TrackersContent extends Component {


    constructor()
    {
        super();
        this.state = {
            tmp_name:"",
            tmp_detail:"",
            names : [{name:"Name",detail:"Bruce Lee"}]
        }
    }

    handleAdd(){
        if(this.state.tmp_name === "")
        {
            return;
        }
        let value = this.state.tmp_name;
        let detail = this.state.tmp_detail;
        let temp = this.state.names;
        temp.push({name:value,detail:detail});
        this.setState({tmp_name:"",tmp_detail:"",names:temp});
    }

    handleRemove(el){
    }

    render() {
        let arr = this.state.names;
        let details = arr.map(el => {
            return(
            <tr>
                <th style={{textAlign:"right"}}>{el.name} : </th>
                <td contentEditable="true" style={{wordWrap:"break-word",textAlign:"left"}} placeholder="Name">{el.detail}</td>
                <td className="w-10" onClick={() => {
                    let arr = this.state.names;
                    let names = arr.filter(check => check !== el);
                    this.setState({names:names})}}>X</td>
            </tr>
            )
            }
            );

        return (
            <div className="row pa2 pt5 center bg-light-gray mt2" style={{maxHeight:"calc(100vh - 100px)",overflowY:"auto"}}>
                <div className="center col-6 tc">
                    <h3>Details</h3>
                    <div>
                        <Table className="w-80 m-auto" >
                            <thead>
                                <tr>
                                    <th className="tr">Attribute Name</th>
                                    <th className="tl">Value</th>
                                    <th className="w-10"><i className="fa fa-trash"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {details}
                            </tbody>
                        </Table>
                        <div className="pt4">
                            <input 
                                type="text" 
                                className="tl outline btn ma2" 
                                placeholder="Attribute Name" 
                                value={this.state.tmp_name} 
                                onKeyPress={e => {if(e.key === "Enter"){this.handleAdd()}}}
                                onChange={(evt) => this.setState({tmp_name:evt.target.value})} />
                                :
                            <input 
                                type="text" 
                                className="tl outline btn ma2" 
                                placeholder="Attribute Value" 
                                value={this.state.tmp_detail} 
                                onKeyPress={e => {if(e.key === "Enter" && this.state.tmp_name !== ""){this.handleAdd()}}}
                                onChange={(evt) => this.setState({tmp_detail:evt.target.value})} />
                            <br/><button type="button" className="btn hover-bg-light-gray center w-30  pa1 pt2" onClick={() => this.handleAdd()}>
                            <i className="fa fa-plus-circle fa-1x"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrackersContent;