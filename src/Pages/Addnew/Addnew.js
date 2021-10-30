import React from "react";
import "./Addnewservices.css";

const Addnew = () => {
  return (
    <div className="addnew-parent">
      <div class="form">
        <div class="form-toggle"></div>
        <div class="form-panel one">
          <div class="form-header">
            <h1>ADD NEW Destinations</h1>
          </div>
          <div class="form-content">
            <form>
              <div class="form-group">
                <label for="username">Destinations name</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="password">Images</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="password">Discription</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                />
              </div>

              <div class="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div class="form-panel two">
          <div class="form-header">
            <h1>Register Account</h1>
          </div>
          <div class="form-content">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="cpassword">Confirm Password</label>
                <input
                  id="cpassword"
                  type="password"
                  name="cpassword"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                />
              </div>
              <div class="form-group">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="pen-footer"></div>
    </div>
  );
};

export default Addnew;