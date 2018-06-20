import React, { Component } from 'react';
import Main from "../components/Main";
import "../styles/Signup.css";

export default class Signup extends Component {
  render() {
    return (
      <div classNameName="signup">
        <Main>
          <div className="page-header header-filter" filter-color="purple" id="background-signup">
            <div className="container">
              <div className="section section-signup page-header">
                <h1 className="ml4">
                  <span className="letters letters-1">Ready</span>
                  <span className="letters letters-2">Set</span>
                  <span className="wandermust letters letters-3">Wander-Must</span>
                </h1>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-lg-6 col-sm-9 ml-auto mr-auto">
                      <div className="card card-signup">
                        <form className="form" method="POST" action="">
                          <div className="card-header card-header-primary text-center">
                            <h4>Sign Up</h4>
                            <div className="social-line">
                              <a href="#pablo" className="btn btn-link btn-just-icon">
                                <i className="fa fa-facebook-square"></i>
                              </a>
                              <a href="/login/twitter" className="btn btn-link btn-just-icon">
                                <i className="fa fa-twitter"></i>
                              </a>
                              <a href="#pablo" className="btn btn-link btn-just-icon">
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </div>
                          </div>
                          <p className="text-divider">Or Be Old Fashioned</p>
                          <div className="card-body">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">face</i>
                                </span>
                              </div>
                              <input type="text" className="form-control" id="user-name" placeholder="Username..." required />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">email</i>
                                </span>
                              </div>
                              <input type="email" className="form-control" id="user-email" placeholder="Email..." required />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">lock_outline</i>
                                </span>
                              </div>
                              <input type="password" className="form-control" id="user-password" placeholder="Password..." required />
                            </div>

                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">supervised_user_circle</i>
                                </span>
                              </div>
                              <select className="custom-select" id="user-gender" name="gender" required>
                                <option selected>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="noGender">I prefer not to answer</option>
                              </select>
                            </div>
                          </div>
                          <div className="card-footer justify-content-center">
                            <button id="signup-btn" className="btn btn-primary btn-lg">Get Started</button>
                          </div>
                        </form>
                      </div> {/* ends card-signup */}
                    </div> {/* ends column in cars */}
                  </div> {/* ends row for card */}
                </div> {/* ends container */}
              </div> {/* ends section-signup */}
            </div> {/* ends container */}
          </div> {/* ends header */}
        </Main>
      </div> 
    )
  }
}
