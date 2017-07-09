import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App';

const HelloApp = () => <App />

AppRegistry.registerComponent('hello_react_native', () => HelloApp);
