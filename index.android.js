/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @lanveer
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ActivityIndicator
} from 'react-native';

import HelloWorld from './app/helloworld'

AppRegistry.registerComponent('firstApps', () => HelloWorld);
