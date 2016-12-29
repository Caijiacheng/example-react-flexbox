import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      requestContent: 'please press the btn'
    };
    this.getJSON.bind(this);
    // this.handlerValid.bind(this);
    // this.handlerInvaid.bind(this);
  }

  // {this.renderBtn('有效请求', this.handlerValid)}
  // {this.renderBtn('无效请求', this.handlerInvaid)}
  render() {
    console.log("----render---")
    return (
      <div className="App">
        <div className="App-header">
          <Content value={this.state.requestContent} />
        </div>
        <div>
          {this.renderBtn('有效请求', () => this.handlerValid())}
          {this.renderBtn('无效请求', () => this.handlerInvaid())}
        </div>
      </div>
    );
  }

  renderBtn(text, handler) {
    return <RequestBtn value={text} onClick={handler} />;
  }

  getJSON(url) {
      var promise = new Promise(function (resolve, reject) {
      var client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.send();

      function handler() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };


    });

    return promise;
  }


  setRequestContent(json) {
    this.setState({ requestContent: json });
  }

  handlerValid() {
    //  debugger
    //  let ref = this
    this.getJSON("/img/example.jpg").then((json) => {
      // debugger
      // this.setRequestContent(json);
      this.setState({ requestContent: json });
      console.log('Contents: ' + json);
    }).catch(error => {
      console.error('出错了', error);
    });

  }


  handlerInvaid() {
    this.setState({ requestContent: 'invalid' });
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
