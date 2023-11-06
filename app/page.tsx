import React from "react";
import "./mainPage.scss";
const HomePage = () => {
  return (
    <div className="home">
      <section className="main">
        <div className="container">
          <p className="p1">100% Natural Food</p>
          <p className="p2">Choose the best healthier way of life</p>
          <button className="btn1">
            Explore Now <img src="/image4.svg" alt="" />
          </button>
        </div>
      </section>
      <section className="info">
        <div className="cards container">
          <div className="card">
            <img src="/image5.png" alt="" />
            <div className="content">
              <p className="p3">Natural!!</p>
              <p className="p4">Get Garden Fresh Fruits</p>
            </div>
          </div>
          <div className="card">
            <img src="/image6.png" alt="" />
            <div className="content">
              <p className="p5">Offer!!</p>
              <p className="p6">Get 10% off on Vegetables</p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-about">
        <div className="container">
          <div className="image-box">
            <img src="/image7.png" alt="" className="image7" />
          </div>
          <div className="d1">
            <p className="p1">About Us</p>
            <p className="p2">We Believe in Working Accredited Farmers</p>
            <p className="p3">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="list">
              <img src="/image8.svg" alt="" />
              <div className="d2">
                <p className="p4">Organic Foods Only</p>
                <p className="p5">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="list">
              <img src="/image9.svg" alt="" />
              <div className="d2">
                <p className="p4">Organic Foods Only</p>
                <p className="p5">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <button className="btn2">
              Explore Now <img src="/image4.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
