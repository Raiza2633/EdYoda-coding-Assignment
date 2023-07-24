import React from "react";
import Nav from "./component/Nav/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Hero from "./component/Nav/Hero/Hero";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Hero />
        {/* <Routes>
          <Route />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
