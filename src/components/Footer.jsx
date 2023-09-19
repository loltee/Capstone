import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align.items-center">
            <div className="col-8">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Our NewsLetter</h2>
                <div className="col-7">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control py-1"
                      placeholder="Enter Email Here"
                      aria-label="Enter Email Here"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text p-2" id="basic-addon2">
                      <button>Subscribe</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  123 Very Far Away Lane <br /> Altanta, Ga <br />
                  052395
                </address>
                <a
                  href="tel: (800) 123-4567 "
                  className="mt-4 d-block mb-3 text-white"
                >
                  (800) 123-4567
                </a>
                <a
                  href="mailto: propergadgets@customersupport.com "
                  className="mt-4 d-block mb-3 text-white"
                >
                  propergadgets@customersupport.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsFacebook className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsGithub className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Tracy Kendrick
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// used <address> to put in a address and make sure to use <br/> to break it down to another line.
// for fs(font size) the bigger the number the smaller the icon will be and the smaller the number the bigger the icon will be.
