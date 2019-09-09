import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import './Content.css'
import ReactTooltip from 'react-tooltip'

class ChapterContent extends Component {

    constructor(){
        super();
        this.contentEditable = React.createRef();
        this.state = {
            IsContent : false,
            Title: "",
            Content: "Start Typing Here",
            curse:true,
            autofill:true,
            history:true
        };
    } 
      
    componentWillMount()
    {
        // set Title from the Trackers 
        this.setState({Title:this.props.name});
    }

    TitleChange = title => {
        this.setState({Title: title.target.value});
    };

    // On content change
    ContentChange(cont) {
        let temp = cont.target.value;
        let arr = ["name", "anyone"]
        let dat = ["bitch"];
        
        // check for escape string
        let name = temp.lastIndexOf("%") !== -1 ? temp.substring(temp.lastIndexOf("@") + 1, temp.lastIndexOf("%")) : "";
        
        // change escape string with the specified tracker info
        if(arr.includes(name) && this.state.autofill)
        {
            this.setState({Content:temp.replace("@"+name+"%","<br>Shaik sha vali")});
            return;
        }

        // check if curse words is switched on
        if(this.state.curse)
        {
            for(var x in dat)
            {
                this.setState({Content:temp.replace(dat[x],"bi**h")});
                return;
            }
        }
        // update state
        this.setState({Content: temp});
    };


    render() {
        return (
            <div className="pa4 pt5 center bg-light-gray" style={{maxHeight:"calc(100vh - 100px)",overflowY:"auto"}} onClick={() => {if(this.state.Content === ""){this.setState({Content:"Start Typing Here"})}}}>
                <ReactTooltip place="left" type="dark" effect="float"/>
                <div className="tc">
                    <input className="bg-light-gray gray f2 tc" style={{outline:"none", border: "none"}} type="text" placeholder="Title Here"></input>
                    <p className="dark-gray">__________________________</p>
                </div>
                <div className="f3 dark-gray pt4 ph3" style={{fontFamily:"Merriweather",wordWrap:"break-word"}}>
                    <ContentEditable
                    style={{outline:"none",maxWidth:"80vw",minHeight:"45vh",fontSize:"22px"}}
                    onClick={() => {
                        if(this.state.Content === "Start Typing Here" )
                        {
                            this.setState({Content:""});
                        }
                    }
                    }
                    innerRef={this.contentEditable}
                    html={this.state.Content} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={(e) => this.ContentChange(e)} // handle innerHTML change
                    tagName='p' // Use a custom HTML tag (uses a div by default)
                    className="center ph6"
                    />
                </div>
                <div className="fixed-bottom tc ml0 mt2 center w-25">
                    <h5>Word Count : {this.state.Content.replace(/<[^>]+>/g, ' ').replace(/\s+/gi,' ').split(' ').length}</h5>
                </div>
                <div className="floating-options br3">
                    <p className="bg-light-blue hover-bg-light-green ph3 pv2 mv1" data-tip="Smart Insert" onClick={() => {this.setState({autofill:!this.state.autofill})}}>
                        <span className="fa-stack fa-1x">
                            <i className="fa fa-stack-1x fa-hand-lizard-o"/>
                            {this.state.autofill?"":<i className="fa fa-stack-2x fa-times"/>}
                        </span>
                    </p>
                    <p className="bg-light-blue hover-bg-light-green ph3 pv2 mv1" data-tip="Read Safe" onClick={() => {this.setState({curse:!this.state.curse})}}>
                        <span className="fa-stack fa-1x">
                            <i className="fa fa-stack-1x fa-eye"/>
                            {this.state.curse?"":<i className="fa fa-stack-2x fa-times"/>}
                        </span>
                    </p>
                    <p className="bg-light-blue hover-bg-light-green ph3 pv2 mv1" data-tip="History" onClick={() => {this.setState({history:!this.state.history})}}>
                        <span className="fa-stack fa-1x">
                            <i className="fa fa-stack-1x fa-history"/>
                            {this.state.history?"":<i className="fa fa-stack-2x fa-times"/>}
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default ChapterContent;