import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Table} from 'reactstrap';

class Plots extends Component {


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

    static propTypes = {
        prop: PropTypes
    }

    render() {

        let AsideData;
        if(true){
            AsideData = 
            <div className="bg-gray light-gray" style={{height:"89vh"}}>
                <div className="pa2 bg-blue white">
                    <h4 className="ma0">
                    {this.props.name}
                    <i className="fa fa-times fa-1x fr"></i>
                    </h4>
                </div>
                <div className="overflow-auto">
                        <p className="pa2" contentEditable="true" style={{fontSize:"19px"}} placeholder="Write Text Here">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>;
        } 
        else{
            let arr = this.state.names;
            let details = arr.map(el => {
                return(
                <tr>
                    <th style={{textAlign:"right"}}>{el.name} : </th>
                    <td className="w-spc-nowrap tl" colspan="2">{el.detail}
                    <i className="fa fa-times fr" onClick={() => {
                        let arr = this.state.names;
                        let names = arr.filter(check => check !== el);
                        this.setState({names:names})}}></i>
                    </td>
                    
                </tr>
                )
            }
            );
            
            AsideData = 
            <div className="bg-white" style={{height: "89vh"}}>
                <div className="pa2 bg-blue white">
                    <h4 className="ma0">
                    {this.props.name}
                    <i className="fa fa-times fa-1x fr"></i>
                    </h4>
                </div>
                <Table className="m-auto" >
                    <thead>
                        <tr>
                            <th className="tr">Attribute</th>
                            <th className="tl" colspan="2">Value<i className="fa fa-trash fr"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {details}
                    </tbody>
                </Table>
                <div className="tc pt4">
                    <input 
                        type="text" 
                        className="tl outline btn ma2" 
                        placeholder="Attribute Name" 
                        value={this.state.tmp_name} 
                        onKeyPress={e => {if(e.key === "Enter"){this.handleAdd()}}}
                        onChange={(evt) => this.setState({tmp_name:evt.target.value})} />
                        
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
            </div>;
        }

        return (
            AsideData
        )
    }
}
export default Plots;