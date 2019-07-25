import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import _ from "lodash";
import thunkMiddleware from "redux-thunk";

import { api } from "../services/api";

import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from "react-navigation-redux-helpers";

// Root Screen
import { Provider, connect } from "react-redux";
import React from "react";

import reducer from "./reducers";

// Store Creation
export default RawAppContainer => {
  const enhancers = [];
  const navMiddleware = createReactNavigationReduxMiddleware(state => state.rnav);
  enhancers.push(
    applyMiddleware(
      navMiddleware,
      thunkMiddleware
    )
  );

  const navReducer = createNavigationReducer(RawAppContainer);

  const store = createStore(
    combineReducers({ ...reducer, rnav: navReducer }),
    compose(...enhancers)
  );

  
  // Apply store to components
  const ReduxAppContainer = createReduxContainer(RawAppContainer);
  const mapStateToProps = state => ({
    state: state.rnav
  });

  const ConnectedApp = connect(mapStateToProps)(ReduxAppContainer);

  class Root extends React.PureComponent {
    render() {
      return (
        <Provider store={store}>
          <ConnectedApp />
        </Provider>
      );
    }
  }

  return Root;
};
