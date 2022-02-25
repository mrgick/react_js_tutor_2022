import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Todo } from "./routes/Todo/Todo";
import { Navbar } from "./routes/Navbar/Navbar";
import { Home } from "./routes/Home/Home";

const App = (props) => {
  return (
    <>
      <Router>
        <Navbar>{/* <Todo /> */}</Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/users" element={<Home />} />
          <Route path="/account" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
