import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Todo } from "./routes/Todo/Todo";
import { Navbar } from "./routes/Navbar/Navbar";
import { Home } from "./routes/Home/Home";
import { Users } from "./routes/Users/Users";

const App = (props) => {
  return (
    <>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/users" element={<Users />} />
          <Route path="/account" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
