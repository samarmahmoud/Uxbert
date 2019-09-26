import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {RequiredImg} from '../../../Assets/index';
import {styles} from './style';

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 2000);
  }
  render() {
    return (
      <ImageBackground source={RequiredImg.Background} style={styles.imageBg}>
        <Text style={styles.Title}>{'UXbert Labs'}</Text>
      </ImageBackground>
    );
  }
}
export default Splash;
