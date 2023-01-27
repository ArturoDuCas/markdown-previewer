import React from "react"; 
import "./Editor.css"

export class Editor extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {
            input: `# Welcome to my React Markdown Previewer!
---
## This is a sub-heading...
### And here's some other cool stuff:
Here's some code, \`<div></div>\`, between 2 backticks.
\`\`\`js
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`  
--- 
### Give style to the text!  
You can also make text **bold**... whoa!  
Or _italic_.  
Or... wait for it... **_both!_**   
~~Hi! I'm a strikethrough text~~  
There's also [links](https://github.com/ArturoDuCas/markdown-previewer), and  
> Block Quotes! 
### And if you want to get really crazy, even tables:
| S/N | Pet | Image |
|--|--|--|
| 1 | Cat |![A cat looking at you](https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=68615bab04be2077a471009ffc236509) |
| 2 | Dog |![A dog looking at you](https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg)|
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![open peeps image](https://blush-design.imgix.net/collections/open-peeps/58d91dc1-9607-4572-b5e2-2048c3d4e1f4.png?auto=compress&cs=srgb)

`
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);  
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
        this.props.write(event.target.value);
    }

    handleClick = () => {
        this.setState({
            input: ""
        });
        this.props.write("");
    }
    
    render () {
        return (
            <div id="editor-container">
                <div class="header">
                    <div class="header-left-side">
                        <img alt="avatar" src={require('./images/markdown-header.png')} class="header-img" style={{backgroundColor:"#f0f0f0"}}/>
                        <h2>MARKDOWN</h2>
                    </div>
                    <button onClick={this.handleClick} id="delete-all">Clear all</button>
                </div>
                <textarea id="editor" autofocus value={this.state.input} onChange={this.handleChange}></textarea>

            </div>
        ); 
    }

}

