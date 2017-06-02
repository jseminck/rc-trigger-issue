import React, { Component } from 'react';
import Trigger from "rc-trigger";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      triggerVisible: true
    }
  }

  onToggleClick = () => {
    this.setState((prevState) => {
      return {
        triggerVisible: !prevState.triggerVisible
      }
    })
  }

  onAlertClick() {
    alert("Hello World!")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.onAlertClick}>Click me to show alert</button>
          <Trigger
              popupStyle={{zIndex: 11, height: 1000, width: 275, background: "gray"}}
              popupVisible={this.state.triggerVisible}
              destroyPopupOnHide={true}
              popupAlign={{
                  points: ["tc", "bc"],
                  offset: [0, 10],
              }}
              popup={<div>This is my popup</div>}
          >
            <button onClick={this.onToggleClick}>Click me to toggle rc-trigger</button>
          </Trigger>
          <button onClick={this.onAlertClick}>Click me to toggle rc-trigger</button>
        </p>
      </div>
    );
  }
}

export default App;
