import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {Input, Button} from '../../commons';
import {styles} from './style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: AsyncStorage.getItem('InputData'),
     
    };
  }
 handleSave= async()=>{
 await  AsyncStorage.setItem('InputData',this.state.userInput)
  this.props.navigation.navigate('UserData')
  
}
componentDidMount(){
    AsyncStorage.getItem('InputData').then(data=>this.setState({userInput:data}))
}

  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.Headline}>
          {"Welcome Samar " + (this.state.userInput=== null ? "" : this.state.userInput)}  
        </Text>
        <Input
          inputContainer={styles.inputContainer}
          value={this.state.userInput}
          onChangeText={value => this.setState({userInput: value})}
          placeholder={'Enter your Data'}
          StyleInput={styles.input}
        />
        <Button
          title={'Add'}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={() => {this.handleSave()}}
        />
      </View>
    );
  }
}
export default Home;
