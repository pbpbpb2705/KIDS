import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import PastEventPage from "./pages/pasteventpage/PastEventPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import ContactPage from "./pages/contactpage/ContactPage";
import SearchPage from "./pages/searchpage/SearchPage";
import UpcomingPage from "./pages/upcomingpage/UpcomingPage";
import Project1314 from "./pages/yearspage/Project1314";
import Project1516 from "./pages/yearspage/Project1516";
import Project1718 from "./pages/yearspage/Project1718";
import Project1920 from "./pages/yearspage/Project1920";
import Project2122 from "./pages/yearspage/Project2122";
import Footer from "./components/footer/Footer";
import DetailPage from "./pages/detailpage/DetailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />{" "}
        <Route exact path="/past" component={PastEventPage} />{" "}
        <Route path="/about" exact component={AboutPage} />{" "}
        <Route path="/contact" exact component={ContactPage} />{" "}
        <Route path="/upcoming" exact component={UpcomingPage} />{" "}
        <Route path="/search" component={SearchPage} />{" "}
        <Route path="/1314projects" component={Project1314} />{" "}
        <Route path="/1516projects" component={Project1516} />{" "}
        <Route path="/1718projects" component={Project1718} />{" "}
        <Route path="/1920projects" component={Project1920} />{" "}
        <Route path="/2122projects" component={Project2122} />{" "}
        <Route path="/ntd-3-2021" component={DetailPage} />{" "}
        <Route path="/vinhlong-11-2020" component={DetailPage} />{" "}
        <Route path="/bentre-3-2020" component={DetailPage} />{" "}
        <Route path="/dongnai-10-2020" component={DetailPage} />{" "}
        <Route path="/bentre-9-2020" component={DetailPage} />{" "}
        <Route path="/vinhlong-7-2020" component={DetailPage} />{" "}
        <Route path="/binhdinh-8-2019" component={DetailPage} />{" "}
        <Route path="/bentre-9-2019" component={DetailPage} />{" "}
        <Route path="/sapa-7-2019" component={DetailPage} />{" "}
        <Route path="/vinhlong-7-2019" component={DetailPage} />{" "}
      </Switch>{" "}
      <Footer />
    </Router>
  );
}
export default App;
