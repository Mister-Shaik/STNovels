import React, { Component } from 'react';
import data from '../../Files/data.json';
import {Collapse} from 'reactstrap';

class Lists extends Component {

    constructor(){
        super();
        this.state = {
            Open : false,
            states : {}
        }
    }

    componentWillMount(){
        let states = Object.keys(data["Trackers"]).reduce((acc, curr) => 
        {acc[curr] = false;
         return acc }, {});
        this.setState({states:states});
        
    }

    render() {
        let final;
        if(this.props.name === "Trackers")
        {
            let x = data[this.props.name];
            let values = Object.keys(x);
            final = values.map(vals => (
                <div>
                    <h5 className="mt0 pl3 pa2 shadow-5" style={{backgroundColor:"#08d9d6",color:"#252a34",whiteSpace:"nowrap"}} onClick={() => {let temp = this.state.states; temp[vals] = !temp[vals]; this.setState({states : temp})}}>- {vals} <i className="fa fa-plus-circle fa-1x fr"  data-toggle="modal" data-target={"#" + vals}></i></h5>
                    
                    <Collapse isOpen={this.state.states[vals]}>
                        {Object.keys(x[vals]).map(el => (<h5 className="pl3 gray hover-bg-light-gray pl4 overflow-x-hidden" style={{whiteSpace:"nowrap"}}>{x[vals][el]}</h5>))}
                    </Collapse>
                    
                    <div className="modal fade" id={vals} tabIndex="-1" role="dialog" aria-labelledby="x" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="x">{vals}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body center">
                            <label>Name : </label>
                            <input type="text" className="btn ma2" placeholder="Type here" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            ))
        }
        else{
            let x = data[this.props.name];
            let keys = Object.keys(x);
            final = keys.map(key => (<h5 className="mv0 pl3 gray hover-bg-light-gray pv1"  style={{whiteSpace:"nowrap"}}> {x[key]}</h5>));
        }

        return (
            <div> 
                {final}
            </div>
        );
    }
}

export default Lists;