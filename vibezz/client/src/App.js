import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/signin";
import concerts from "./pages/concerts";
import chatroom from "./pages/chatroom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
