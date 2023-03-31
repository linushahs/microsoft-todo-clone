import React from "react";

export default function AddAccount() {
  return (
    <div className="signup-container">
      <div className="signup-acc">
        <h2>Join Microsoft Todo 🚀</h2>
        <form action="">
          <div className="">
            <label htmlFor="fname">Full Name</label>
            <input className="data-input" type="text" name="" id="fname" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input className="data-input" type="text" name="" id="email" />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input className="data-input" type="password" name="" id="pass" />
          </div>
          <div>
            <label htmlFor="confpass">Confirm Password</label>
            <input
              className="data-input"
              type="password"
              name=""
              id="confpass"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
