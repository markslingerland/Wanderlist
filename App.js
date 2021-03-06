import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './src/reducers/exampleReducer';
import points from './src/reducers/pointReducer';
import categories from "./src/reducers/categoryReducer";
import { RootStack } from './src/config/navigation'

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({repos: reducer, points, categories })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <RootStack />
      </Provider>
    );
  }
}

