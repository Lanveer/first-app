/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ActivityIndicator
} from 'react-native';

export default class firstApps extends Component {
  render() {
    return (
      <View style={styles.container}>

       <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>


        <Text style={styles.welcome}>
        this 璐牛牛
        </Text>

        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

 <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" animating={true}/>
        <ActivityIndicator size="small" color="#00ff00" animating={true}/>
        <ActivityIndicator size="large" color="#0000ff" animating={true}/>
        <ActivityIndicator size="small" color="#00ff00"  animating={true}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
   horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
});

AppRegistry.registerComponent('firstApps', () => firstApps);
