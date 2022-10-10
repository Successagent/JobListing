import React from "react";
import { Link } from "react-router-dom";
import StyledAuthPage from "./auth.styled";

export default function Login() {
  return (
    <StyledAuthPage>
      <form action="">
        <h4>Login to your account</h4>
        <div className="horizontal_line">
          <div className=""></div>
        </div>
        <button>Facebook</button>
        <button>Google</button>
        <div className="">
          <div className="horizontal_line">
            <div className=""></div>
          </div>
          <p>or</p>
          <div className="horizontal_line">
            <div className=""></div>
          </div>
        </div>
        <label>
          <p>Email Address</p>
          <input type="text" />
        </label>
        <label>
          <p>Email Address</p>
          <input type="text" />
        </label>
        <div className="">
          <label>
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
          </label>

          <Link to={"/"}>Forgot Password</Link>
        </div>
        <button>SignIn</button>
        <p>
          Don't have an account yet? <Link to={"/"}>Sign Up</Link>
        </p>
      </form>
    </StyledAuthPage>
  );
}
