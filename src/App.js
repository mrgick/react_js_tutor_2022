import logo from './logo.svg';
import React, { Component, useState } from 'react';
import Todo from './components/Todo/Todo';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 

class App extends Component {

  state = {
    title: this.props?.title ? this.props.title : 'Default title'
  }
  

  render(){
    const {title} = this.state
    return(
      <>
      <Router>
        <Navbar>
          {/* <Todo /> */}
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/todo' element={<Todo />}/>
          <Route path='/users' element={<Home />}/>
          <Route path='/account' element={<Home />}/>
        </Routes>
      </Router>
      </>
    )
  }
  
}

const Home = ()=> {
  return(
    <>
      <p>Home page</p>
    </>
  )
}
export default App;
