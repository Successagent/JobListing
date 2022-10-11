import React from "react";
import { Link } from "react-router-dom";
import StyledAuthPage from "./auth.styled";

export default function Login() {
  return (
    <StyledAuthPage>
      <form action="">
        <div className="form__top">
          <h4>Login to your account</h4>
        </div>
        <div className="other_auth">
          <button>Facebook</button>
          <button>Google</button>
        </div>
        <div className="or_line">
          <div className="horizontal_line">
            <div className=""></div>
          </div>
          <p>or</p>
          <div className="horizontal_line">
            <div className=""></div>
          </div>
        </div>
        <label className="label">
          <p>Email Address</p>
          <input className="input" type="text" placeholder="Enter email" />
        </label>
        <label className="label">
          <p>Email Address</p>
          <input className="input" type="text" placeholder="Password" />
        </label>
        <div className="row jcsb">
          <label className="row">
            <input type="checkbox" name="" id="" />
            <p>
              <small>Remember me</small>
            </p>
          </label>

          <Link to={"/"}>
            <small>Forgot Password</small>
          </Link>
        </div>
        <button>SignIn</button>
        <p>
          Don't have an account yet? <Link to={"/"}>Sign Up</Link>
        </p>
      </form>
    </StyledAuthPage>
  );
}
