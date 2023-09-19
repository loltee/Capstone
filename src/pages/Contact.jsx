import React from "react";
import Meta from "../components/meta";
import Breadcrumb from "../components/Breadcrumb";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsInfoLg } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <Meta title={"Contact Us"} />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13260.028627101377!2d-84.136660990191!3d33.81212838908072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2sus!4v1694636372435!5m2!1sen!2sus"
                width="600"
                height="450"
                className="border - w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="inside contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Message Us"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-titles mb-4 inside">
                    Get in Touch With Us
                  </h3>
                  <div className="touchbase">
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-10 align-items-center">
                        <AiOutlineHome className="fs-3" />
                        <address className="mb-0 py-2 ">
                          123 Very Far Away Lane Altanta, Ga 052395
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-10 align-items-center">
                        <BiPhoneCall className="fs-3" />
                        <a href="tel:(800) 123-4567">(800) 123-4567</a>
                      </li>
                      <li className="mb-3 d-flex gap-10 align-items-center">
                        <AiOutlineMail className="fs-3" />
                        <a href="mailto:propergadgets@customersupport.com">
                          propergadgets@customersupport.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-10 align-items-center">
                        <BsInfoLg className="fs-3" />
                        <p className="mb-0">Monday- Friday 8am-11pm EST</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
