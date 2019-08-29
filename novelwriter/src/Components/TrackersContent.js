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
            names : [{name:"Name",detail:""}]
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
                <th>{el.name}</th>
                <td contentEditable="true" style={{wordWrap:"break-word"}} placeholder="Name">{el.detail}</td>
                <td className="w-10" onClick={() => {
        let arr = this.state.names;
        let names = arr.filter(check => check !== el);
        this.setState({names:names})}}>X</td>
            </tr>
            )
            }
            );
    
            let personality = (
            <div className="col-6 tc center">
                <h4>Personality</h4>
                <p className="outline tl pa2" contentEditable="true" style={{minHeight:"120px",wordWrap:"break-word"}} />
            </div>);

        return (
            <div className="row pa4 pt5 center bg-light-gray" style={{maxHeight:"calc(100vh - 100px)",overflowY:"auto"}}>
                <div className="center col-6 tc">
                    <h4>Details</h4>
                    <div>
                        <Table className="tl" >
                            <tbody>
                                {details}
                            </tbody>
                        </Table>
                        <div>
                            <input 
                                type="text" 
                                className="tl outline btn ma2 w-30" 
                                placeholder="Name" 
                                value={this.state.tmp_name} 
                                onKeyPress={e => {if(e.key === "Enter"){this.handleAdd()}}}
                                onChange={(evt) => this.setState({tmp_name:evt.target.value})} />
                            <input 
                                type="text" 
                                className="tl outline btn ma2 w-30" 
                                placeholder="Detail" 
                                value={this.state.tmp_detail} 
                                onKeyPress={e => {if(e.key === "Enter" && this.state.tmp_name !== ""){this.handleAdd()}}}
                                onChange={(evt) => this.setState({tmp_detail:evt.target.value})} />
                            <button type="button" className="btn hover-bg-light-gray center w-30  pa1 pt2" onClick={() => this.handleAdd()}>
                            <i className="fa fa-plus-circle fa-1x"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
                {personality}
            </div>
        );
    }
}

export default TrackersContent;