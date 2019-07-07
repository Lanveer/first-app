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
import TabNavigator from 'react-native-tab-navigator';
export default class HelloWorld extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>this is hellowqw </Text>

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
 hello:{
 fontSize:20,
 color:'#ccc',
 textAlign:'center',
 margin:20
 }
});

AppRegistry.registerComponent('firstApps', () => firstApps);
