import React from 'react';
import Navbar from "../components/navbar";
import '../index.css'; // Import file CSS

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <h1 className="title">Home</h1>
        <h2 className="subtitle">Welcome to BukaToko</h2>
        <p className="description">
          Discover a variety of products at our store. Shop now and enjoy special deals!
        </p>
      </div>
    </div>
  );
};

export default Home;
