import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'

class ChapterContent extends Component {

    constructor(){
        super();
        this.contentEditable = React.createRef();
        this.state = {
            IsContent : true,
            Title: "",
            Content: "Start Writing from here"
            };
    }

    componentWillMount()
    {
        this.setState({Title:this.props.name});
    }

    TitleChange = title => {
        this.setState({Title: title.target.value});
    };

    ContentChange = cont => {
        this.setState({Content: cont.target.value});
      
    };

    render() {
        return (
            <div className="pa4 pt5 center bg-light-gray" style={{maxHeight:"calc(100vh - 100px)",overflowY:"auto"}} onClick={() => {if(this.state.Content === ""){this.props.onClick()}}}>
                <div className="tc">
                    <input className="bg-light-gray f2 tc" style={{outline:"none", border: "none"}} type="text" placeholder="Title Here"></input>
                    <p className="dark-gray">__________________________</p>
                </div>
                <div className="f3 dark-gray pt4 ph3" style={{fontFamily:"Merriweather",wordWrap:"break-word"}}>
                    <ContentEditable
                    style={{outline:"none"}}
                    onClick={() => {
                        if(this.state.IsContent === true)
                        {
                            this.setState({Content:""});
                            this.setState({IsContent:false})
                        }
                    }
                    }
                    innerRef={this.contentEditable}
                    html={this.state.Content} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={this.ContentChange} // handle innerHTML change
                    tagName='p' // Use a custom HTML tag (uses a div by default)
                    className="ph6"
                    />
                </div>
                <div className="fixed-bottom tc ml0 mt2 center w-25">
                    <h5>Word Count : {this.state.Content.split(' ').length}</h5>
                </div>
            </div>
        );
    }
}

export default ChapterContent;