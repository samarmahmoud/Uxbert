import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './src/Navigation/index';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5c2e8e" barStyle="light-content" />
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
