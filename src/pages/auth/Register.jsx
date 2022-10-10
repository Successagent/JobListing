import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form action="">
        <h4>Register</h4>
        <div className="horizontal_line" />
        <button>Facebook</button>
        <button>Google</button>
        <div className="">
          <div className="horizontal_line" />
          <p>or</p>
          <div className="horizontal_line" />
        </div>
        <label>
          <p>Email Address</p>
          <input type="text" />
        </label>
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
            <p>Agree to terms and policy</p>
          </label>

          <span />
        </div>
        <button>Sign Up</button>
        <p>
          You have an account? <Link to={"/"}>Sign In</Link>
        </p>
      </form>
    </div>
  );
}
