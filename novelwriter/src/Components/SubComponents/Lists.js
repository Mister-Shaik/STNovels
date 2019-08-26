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
                    <h5 className="mt0 pl3 pa2 shadow-5" style={{backgroundColor:"#08d9d6",color:"#252a34"}} onClick={() => {let temp = this.state.states; temp[vals] = !temp[vals]; this.setState({states : temp})}}>- {vals}</h5>
                    <Collapse isOpen={this.state.states[vals]}>
                        {Object.keys(x[vals]).map(el => (<h5 className="pl3 gray hover-bg-light-gray pl4">{x[vals][el]}</h5>))}
                    </Collapse>
                </div>
            ))
        }
        else{
            let x = data[this.props.name];
            let keys = Object.keys(x);
            final = keys.map(key => (<h5 className="mv0 pl3 gray hover-bg-light-gray pv1"> {x[key]}</h5>));
        }

        return (
            <div> 
                {final}
            </div>
        );
    }
}

export default Lists;