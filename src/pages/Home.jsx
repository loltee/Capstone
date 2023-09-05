import React from "react";
import Sidenav from "../components/sidenav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/blog";
import ProductCard from "../components/productcard";

//  when using rounder-3 it makes the image corners and size rounded by 3px */

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg"
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
                  <div className=" beats small-banner position-relative justify-content-center align-items-center p-3">
                    <img
                      src="images/catbanner-04.jpg "
                      className="headphone rounded-3"
                      alt="main banner"
                    />
                    <div className="beats-banner-content">
                      <h5>New Brands</h5>
                      <h2>Bose</h2>
                      <p>$299 or $25.00 mo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div>
                  <img
                    src="images/service.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Free Shipping</h6>
                  <p>Over $100</p>
                </div>
                <div>
                  <img
                    src="images/service-02.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Special Offers</h6>
                  <p>Get up to 35% off</p>
                </div>
                <div>
                  <img
                    src="images/service-03.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Customer Support 24/7</h6>
                  <p>Need Help? We are here!</p>
                </div>
                <div>
                  <img
                    src="images/service-04.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Affordable Prices</h6>
                  <p>Cheaper than Most!</p>
                </div>
                <div>
                  <img
                    src="images/service-05.png"
                    alt="services"
                    className="tinypic"
                  />
                  <h6>Secure Payments</h6>
                  <p>Pay with ease!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories">
                <div className="headers">
                  <h6>Cameras</h6>
                  <h6>Headphones</h6>
                  <h6>Televisions</h6>
                  <h6>Laptops</h6>
                  <h6>Watches</h6>
                </div>
                <div className="items d-flex flex-wrap align-items-between">
                  <div className="items flex-wrap position-relative">
                    <img
                      src="images/camera.jpg"
                      alt="camera"
                      className="itemimage"
                    />
                  </div>
                  <div className="items flex-wrap position-relative  ">
                    <img
                      src="images/headphone.jpg"
                      alt="headphone"
                      className="itemimage"
                    />
                  </div>
                  <div className="items  flex-wrap d-flex justified-items-between align-items-center position-relative  ">
                    <img src="images/tv.jpg" alt="tv" className="itemimage" />
                  </div>
                  <div className="items  flex-wrap d-flex justified-items-between align-items-center position-relative   ">
                    <img
                      src="images/laptop.jpg"
                      alt="laptop"
                      className="itemimage"
                    />
                  </div>
                  <div className="items flex-wrap d-flex justified-items-between align-items-center  position-relative  ">
                    <img
                      src="images/watch.jpg"
                      alt="watch"
                      className="itemimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="sectionheading">Featured Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="sectionheading">
                Check Out What Others Have To Say
              </h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
