// import React from "react";
// import Sidenav from '../components/sidenav'
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner postion-relative p-3">
                <img
                  src="images/main-banner-1.jpg "
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h1>Awesome Probuds</h1>
                  <h2>iPad S14+ Pro</h2>
                  <p>From $999.00 or $37.40/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner postion-relative p-3">
                  <img
                    src="images/catbanner-01.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h1> Hot Sale</h1>
                    <h2>2024 Macbooks</h2>
                    <p>From $1499.00 or $98.80/mo</p>
                  </div>
                </div>
                <div className="small-banner postion-relative p-3">
                  <img
                    src="images/catbanner-02.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="catbanner-02 position-absolute">
                    <h1> New New New</h1>
                    <h2>Tablets</h2>
                    <p>From $145.00 or $55.50/mo</p>
                  </div>
                </div>
              </div>
              <div className="small-banner postion-relative p-3">
                <img
                  src="images/catbanner-03.jpg "
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h1> Hot Sale</h1>
                  <h2>2024 Macbooks</h2>
                  <p>From $1499.00 or $98.80/mo</p>
                </div>
                <div className="small-banner postion-relative p-3">
                  <img
                    src="images/catbanner-04.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h1> Hot Sale</h1>
                    <h2>2024 Macbooks</h2>
                    <p>From $1499.00 or $98.80/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// when using rounded-3 it makes the image corners and size rounded by 3px.
