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
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// when using rounded-3 it makes the image corners and size rounded by 3px.
