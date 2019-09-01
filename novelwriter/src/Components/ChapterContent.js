import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import './Content.css'

class ChapterContent extends Component {

    constructor(){
        super();
        this.contentEditable = React.createRef();
        this.state = {
            IsContent : false,
            Title: "",
            Content: "Start Typing Here"
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

        // check for escape string
        let name = temp.lastIndexOf("%") !== -1 ? temp.substring(temp.lastIndexOf("@") + 1, temp.lastIndexOf("%")) : "";
        console.log(name)

        // change escape string with the specified tracker info
        if(arr.includes(name))
        {
            this.setState({Content:temp.replace("@"+name+"%","<br>Shaik sha vali")});
            return;
        }

        // update state
        this.setState({Content: temp});
    };


    render() {
        return (
            <div className="pa4 pt5 center bg-light-gray" style={{maxHeight:"calc(100vh - 100px)",overflowY:"auto"}} onClick={() => {if(this.state.Content === ""){this.setState({Content:"Start Typing Here"})}}}>
                <div className="tc">
                    <input className="bg-light-gray f2 tc" style={{outline:"none", border: "none"}} type="text" placeholder="Title Here"></input>
                    <p className="dark-gray">__________________________</p>
                </div>
                <div className="f3 dark-gray pt4 ph3" style={{fontFamily:"Merriweather",wordWrap:"break-word"}}>
                    <ContentEditable
                    style={{outline:"none",maxWidth:"70vw",minHeight:"45vh"}}
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
                    <h5>Word Count : {this.state.Content.split(' ').length}</h5>
                </div>
                <div className="floating-options pa3 bg-gold br3">
                    <i className="fa fa-arrow-left bg-light-gray"/>
                    <p><i className="fa fa-eye"/></p>
                    <p><i className="fa fa-eye"/></p>
                    <p><i className="fa fa-eye"/></p>
                </div>
            </div>
        );
    }
}

export default ChapterContent;