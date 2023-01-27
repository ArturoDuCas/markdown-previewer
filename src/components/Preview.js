import React from "react";
import "./Preview.css";
import { marked } from 'marked';


export class Preview extends React.Component {
    constructor (props) {
        super(props);
    }
    render() { 
        let markdownText = marked.parse(this.props.storedData.data);
        return(
            <div id="preview-container">
                <div class="header" style={{backgroundColor:"#f0f0f0"}}>
                    <div class="header-left-side">
                        <img alt="avatar" src={require('./images/preview-header.png')} class="header-img" style={{backgroundColor: "#373d49"}}/>
                        <h2>PREVIEW</h2>
                    </div>
                    <div id="my-name">
                        <p>by <span class="bold">arturo duran</span></p>
                    </div>
                </div>
                <div id="preview" dangerouslySetInnerHTML={{ __html: markdownText }} />
            </div>
        ); 
    }
}
