import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from "./components/header/Header";
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import PastPage from "./pages/PastPage";
import UpcomingPage from "./pages/UpcomingPage";
import ApplyPage from "./pages/ApplyPage";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/past" exact component={PastPage}/>
        <Route path="/upcoming" exact component={UpcomingPage}/>
        <Route path="/apply" exact component={ApplyPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App
