import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import '../Content.css'

class ChapterContent extends Component {

    constructor(){
        super();
        this.contentEditable = React.createRef();
        this.state = {
            Title: "",
            Content: "Start Typing Here",
            curse:true,
            autofill:true
        };
    } 
      
    componentWillMount()
    {
        // set Title from the Chapters 
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
            this.setState({Content:temp.replace("@"+name+"%","Shaik sha vali")});
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
        let tc = "g-t-c ";
        let fs = "22px";
        let bgc = "glb-sbg-c ";
        return (
            <div style={{maxHeight:"calc(100vh - 100px)",overflowY:"auto"}}>
                <div className="br4 w-90 pa4 pt5 center" onClick={() => {if(this.state.Content === ""){this.setState({Content:"Start Typing Here"})}}}>
                    <div className="tc">
                        <input className={"f2 tc w-100 " + tc} style={{outline:"none", border: "none", color:"#4E4E4E", backgroundColor: "inherit"}} type="text" placeholder="Title Here"></input>
                        <p className="dark-gray">__________________________</p>
                    </div>
                    <div className="pt4 ph3" style={{wordWrap:"break-word"}}>
                        <ContentEditable
                        style={{outline:"none",maxWidth:"70vw",minHeight:"45vh",fontSize:fs}}
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
                        className={tc + " center"}
                        />

                    </div>
                    <div className="fixed-bottom tc ml0 mt2 center w-25">
                        <h5>Word Count : {this.state.Content.replace(/<[^>]+>/g, ' ').replace(/\s+/gi,' ').split(' ').length}</h5>
                    </div>
                </div>
            </div>
            );
    }
}

export default ChapterContent;