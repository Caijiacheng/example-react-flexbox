import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      requestContent: 'please press the btn'
    };
    
  }

  render() {
    console.log("----render---")
    return (
      <div className="App">
        <div className="App-header">
          <Content value={this.state.requestContent} />
        </div>
        <div>
          {this.renderBtn('有效请求', this.handlerValid.bind(this))}
          {this.renderBtn('无效请求', this.handlerInvaid.bind(this))}
        </div>
      </div>
    );
  }

  renderBtn(text, handler) {
    return <RequestBtn value={text} onClick={handler} />;
  }

  handlerValid() {
    this.setState({requestContent:'valid'});
  }

  handlerInvaid() {
    this.setState({requestContent:'invalid'});
  }
}

class Content extends Component {

  render() {
    return (
      <p className="App-text">
      {this.props.value}
     </p>);
  }
}

class RequestBtn extends Component {
  render() {
    return (
      <button className="Btn" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default App;
