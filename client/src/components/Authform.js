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
    const authType = this.props.signUp ? "signup" : "signin";
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

    return (
      <div>
        <div>
            <div className="auth-form">
                <form onSubmit={this.handleSubmit}>
                  <h2>{heading}</h2>
                  {signUp && (
                    <div className="auth-fields">
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
                  {!signUp && (<div className="auth-fields">
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
                  </div>)}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg">
                    {buttonText}
                  </button>
                </form>
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
                <Switch>
                <Route path="/login" render={() => <Link to="/signup">{redirectText}</Link>}/>
                <Route path="/signup" render={() => <Link to="/login">{redirectText}</Link>}/>
                </Switch>
            </div>
        </div>
    </div>);
  }
}

export default Authform;
