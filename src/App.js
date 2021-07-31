import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import HomePage from "./pages/HomePage";
import PastEventPage from "./pages/PastEventPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SearchPage from "./pages/SearchPage";
import Project1415 from "./pages/yearspage/Project1415"
import Project1617 from "./pages/yearspage/Project1617"
import Project1819 from "./pages/yearspage/Project1819";
import Project2021 from "./pages/yearspage/Project2021";
import Testing1 from "./pages/detailpage/Testing1";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/past" exact component={PastEventPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/2014-2015" component={Project1415} />
        <Route path="/2016-2017" component={Project1617} />
        <Route path="/2018-2019" component={Project1819} />
        <Route path="/2020-2021" component={Project2021} />
        <Route path="/testing1" component={Testing1} />
        <Route path="/testing2" component={Testing1} />
        <Route path="/testing3" component={Testing1} />
        <Route path="/testing4" component={Testing1} />
      </Switch>
    </Router>
  );
}
export default App
