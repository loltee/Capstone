// import React from "react";
// import Sidenav from '../components/sidenav'
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg "
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content">
                  <h1>Awsome Probuds</h1>
                  <h2>Beats by Dre</h2>
                  <p>Starting at $699 or $34.40 mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                <div className="macbook small-banner position-relative justify-content-center p-3">
                  <img
                    src="images/catbanner-01.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="macbook-banner-content">
                    <h5>All New Macbooks</h5>
                    <h2>Macbook Air</h2>
                    <p>$1299 or $98.00 mo</p>
                  </div>
                </div>
                <div className="watch-banner small-banner position-relative justify-content-center p-3">
                  <img
                    src="images/catbanner-02.jpg "
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="watch-banner-content">
                    <h5>Adventure Awaits </h5>
                    <h2>Watch Ultra</h2>
                    <p>$799 or $50.00 mo</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                  <div className="tablet-banner small-banner position-relative justify-content-center p-3">
                    <img
                      src="images/catbanner-03.jpg "
                      className="tablet rounded-3"
                      alt="main banner"
                    />
                    <div className="tablet-banner-content">
                      <h5>New Tablets</h5>
                      <h2>Samsung</h2>
                      <p>$599 or $45.80 mo</p>
                    </div>
                  </div>
                  <div className="small-banner postion-relative p-3">
                    <img
                      src="images/catbanner-04.jpg "
                      className="headphone rounded-3"
                      alt="main banner"
                    />
                    <div className="watch ">
                      <h1> </h1>
                      <h2></h2>
                      <p></p>
                    </div>
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

{
  /* when using rounder-3 it makes the image corners and size rounded by 3px */
}
