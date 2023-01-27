import './App.css';
import * as ReactRedux from 'react-redux';
import React from "react";
import {Editor} from "./components/Editor";
import {Preview} from "./components/Preview";
import {write, store} from "./store";

class App extends React.Component {
  constructor(props) {
    super(props); 
  }
  render () {
    return (
      <div className="App">
      <Editor write={this.props.writeInStore} />
      <Preview storedData={this.props.Data}/>
      </div>
    );
  }
}

// Connect with redux 
const Provider = ReactRedux.Provider; 
const connect = ReactRedux.connect; 

const mapStateToProps = (state) => {
  return {
    Data: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    writeInStore: (_input => {
      dispatch(write(_input)); 
    })
  };
} 

const Container = connect(mapStateToProps, mapDispatchToProps)(App); 

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    ); 
  }
};

export default AppWrapper;
