import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flex: 1,
   
  },
  Text:{
    color:'#15548b',
    marginLeft:21,
    fontSize:19,
    width:'90%'

},
seperator:{
    width:'100%',
    height:22
},
imageBg:{
    width:width,
    height:height,
    alignItems:'center',
    justifyContent:'center'

},
  
});
export {styles};
