import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked  from 'marked';

class App extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears"
        };
    }
    handleChange(){
        this.setState({value: this.refs.textarea.value});
    }
    markdown(){
        return {__html: marked(this.state.value)}
    }
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>React Markdown Editor</h2>
            </div>
            <div className="markdown-editor-wrapper">
                <div className="mdown-left">
                    <h3>Markdown Raw</h3>
                    <textarea
                        onChange={this.handleChange}
                        ref="textarea"
                        defaultValue={this.state.value} />
                </div>
                <div className="mdown-right">
                    <h3>Markdown Compiled</h3>
                    <div
                        className="mdown-compiled"
                        dangerouslySetInnerHTML={this.markdown()} >
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default App;
