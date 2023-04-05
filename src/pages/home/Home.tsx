import "./home.css";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";
import Widget from "../../components/widget/Widget.tsx";
import Featured from "../../components/featured/Featured.tsx";
import Chart from "../../components/chart/Chart.tsx";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="BitCoin(2023)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
