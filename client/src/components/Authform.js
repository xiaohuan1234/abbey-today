import React, { Component } from "react";// eslint-disable-line no-unused-vars
import "./Authform.css";
import { Switch, Route, Link } from "react-router-dom";

class Authform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "login";
    this.props.onAuth(authType);
    /*this.props.onAuth(authType, this.state).then(() => {
      console.log("LOGGED IN!");
    });*/
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { signUp, heading, buttonText,redirectText } = this.props;
    const forgotPasswordText = "Forgot password?";
    return (
      <div>
          <div className="auth-form">
            		<h2> {heading} </h2>
                <form onSubmit={this.handleSubmit}>
                  {signUp && (
                    <div>
                      <input
                        autoComplete="off"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        type="text"
                        value={email}
                        placeholder="Phone number"
                      />
                      <input
                        autoComplete="off"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                        type="password"
                        placeholder="Create a password"
                        value={password}
                      />
                    </div>
                  )}
                  {!signUp && (
                    <div className="auth-fields">
                      <input
                        autoComplete="off"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Phone number"
                        value={email}/>
                      <input autoComplete="off"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                        type="password"
                        value={password}
                        placeholder="Type in password"
                      />
                    </div>
                  )}
                  <div>
	                  <button
	                    type="submit"
	                    className="btn btn-primary btn-block btn-lg">
	                    {buttonText}
	                  </button>
	                  <Route 
	                    path="/login" 
	                    render={() => 
	                      <Link id="forgot-password-label"
	                        to="/forgotpassword">{forgotPasswordText}</Link>}
	                  />
	                  <Route 
	                    path="/signup" 
	                    render={() => 
	                      <div className="forgot-password-placeholder">
	                      </div>}
	                  />
                  </div>
                  <div className="third-party">
	                  <div className="line-break">
	                    <span>or</span>
	                  </div>
                    <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg">
                        Continue with Facebook
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg">
                        Continue with Google
                    </button>
                  </div>
                  <Switch>
                    <Route path="/login" render={() => <Link className="auth-redirect" to="/signup">{redirectText} </Link>}/>
                    <Route path="/signup" render={() => <Link className="auth-redirect" to="/login">{redirectText} </Link>}/>
                  </Switch>
                </form>
            </div>
    </div>);
  }
}

export default Authform;
