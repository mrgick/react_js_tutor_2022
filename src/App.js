import logo from './logo.svg';
import React, { Component, useState } from 'react';
import Todo from './components/Todo/Todo';


class App extends Component {

  state = {
    title: this.props?.title ? this.props.title : 'Default title'
  }
  
  render(){
    const {title} = this.state
    return(
      <>
        <Todo />
      </>
    )
  }
  
}
export default App;
