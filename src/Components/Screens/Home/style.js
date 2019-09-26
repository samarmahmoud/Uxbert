import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    
  },
  Headline:{
    fontSize:18,
    marginTop:height*.3
  },
  input: {
    paddingLeft: 17,
    width: '90%',
    fontSize: 16,
    color: '#7381f9',
  },
  inputContainer: {
    marginTop:height*.2,
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5c2e8e',
    borderRadius: 41,
    width: '60%',
    height: 45.5,
    borderWidth: 2,
    borderColor: '#5c2e8e',
    marginTop:height*.1
  },
  buttonTextStyle: {
    alignSelf: 'center',
    padding: 18,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export {styles};
