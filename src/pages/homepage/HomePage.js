import React from 'react'
import "./HomePage.css"
///import Header from "../components/headerC/Header"
import HomeHeader from '../../components/header/HomeHeader';
//import Footer from '../../components/footer/Footer';

function HomePage() {
    return (
      <div className="home-container">
        <HomeHeader/>
      </div>
    );
}

export default HomePage;
