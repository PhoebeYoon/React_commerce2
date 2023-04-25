import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>  Domino's</h1>
        <p>누구나 좋아하는 맛</p>
        <Link to="/menu">
          <button> 주문하기</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

