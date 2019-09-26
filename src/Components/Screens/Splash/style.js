import {StyleSheet,Dimensions} from 'react-native';
const {width,height} =Dimensions.get('window')

const styles= StyleSheet.create({
    imageBg:{
        width:width,
        height:height,
        alignItems:'center',
        justifyContent:'center'

    },
    Title:{
        color:'#fff',
        fontSize:25,
        fontWeight:'bold',
    }

})
export {styles}