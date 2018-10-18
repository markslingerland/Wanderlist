import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './src/reducers/exampleReducer';
import RepoList from './src/RepoList';
import { RootStack } from './src/config/navigation'

const loggerMiddleware = createLogger();

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <RootStack />
      </Provider>
    );
  }
}

