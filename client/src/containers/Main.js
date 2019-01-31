import React from "react";// eslint-disable-line no-unused-vars

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Main.css";
import Authform from "../components/Authform";

/*import { authUser } from "../store/actions/auth";*/

const Main = props => {
  /*const { authUser } = props;*/
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/login"
          render={props => {
            return (
              <Authform
                onAuth={(authType)=>console.log("auth called by", authType)}
                buttonText="Log in"
                redirectText="No account? Sign up."
                heading="Welcome back!"
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <Authform
                /*onAuth={authUser}*/
                onAuth={(authType)=>{console.log("auth called by", authType);}}
                signUp
                buttonText="Sign Up"
                redirectText="Already a user? Log in."
                heading="Welcome to the Abbey!"
                {...props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}


export default withRouter(connect(mapStateToProps)(Main));
// export default withRouter(connect(mapStateToProps, {authUser})(Main));