import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  renderBtn(text,handler) {
    return <RequestBtn value={text} onClick = {handler}/>;
  }

  handlerValid() {
    alert('valid click');
  }

  handlerInvaid() {
     alert('invalid click');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p className="App-text">
            reload.To get started, edit and save to redsfsdfsdfdsdsf
           edit and save to redsfsdfsdfdsdsf
           edit and save to redsfsdfsdfdsdsfreload.To get started, edit and save to redsfsdfsdfdsdsf
           edit and save to redsfsdfsdfdsdsf
           edit and save to redsfsdfsdfdsdsf
           reload.To get started, edit and save to redsfsdfsdfdsdsf
           edit and save to redsfsdfsdfdsdsf
           edit and save to redsfsdfsdfdsdsf
           reload.To get started, edit and save to redsfsdfsdfdsdsf
           edit and save to redsfsdfsdfdsdsf
           edit and save to redsfsdfsdfdsdsf
         </p>
        </div>
        <div>

          {this.renderBtn('有效请求',this.handlerValid)}
          {this.renderBtn('无效请求',this.handlerInvaid)}
         
        </div>
      </div>
    );
  }
}

class RequestBtn extends Component {


  render() {
    return (
      <button className="Btn" onClick={() => this.props.onClick()}>
        {
          this.props.value
        }
      </button>
    );
  }
}


export default App;
