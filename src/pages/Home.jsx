// frontend/src/pages/Home.js

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>靈修筆記應用</h1>
      <nav>
        <ul>
          <li>
            <Link to="/scripture">美地簿</Link>
          </li>
          <li>
            <Link to="/prayer">禱告簿</Link>
          </li>
          <li>
            <Link to="/prophesy">申言簿</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
