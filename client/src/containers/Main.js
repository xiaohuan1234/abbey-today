import React from "react";// eslint-disable-line no-unused-vars
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Authform from "../components/Authform";
/*import { authUser } from "../store/actions/auth";*/

const Main = props => {
  /*const { authUser } = props;*/
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <Authform
                /*onAuth={authUser}*/
                onAuth={(authType)=>{console.log("auth called by", authType);}}
                buttonText="Log in"
                heading="Welcome Back."
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
                buttonText="Sign me up!"
                heading="Join Warbler today."
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