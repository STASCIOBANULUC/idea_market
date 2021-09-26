import React from 'react';
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

function App(props) {
  console.log(props)
  return (
    <>
        <Switch>
                <Route path="/login" exact component={SignIn} />
                <Route path="/sign-up" exact component={SignUp} />
                <Route path="/" exact component={Home} />
        </Switch>
      </>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(App);
