import React from "react";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
import Meta from "./meta";

const ForgotPassword = () => {
  return (
    <div>
      <Meta title={"Forgot Password"} />
      <Breadcrumb title="Forgot Password" />
    </div>
  );
};

export default ForgotPassword;
