import React, { Component, Fragment } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <h1 className="display-4 font-weight-bold text-uppercase text-primary text-center">
          Login
        </h1>
        <div className="card col-md-4 mx-auto">
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block my-4">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
