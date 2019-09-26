import React from "react";
import { View, StyleSheet, Platform,Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const Card = props => {
  return <View style={[styles.ContainerStyle,props.cardStyle]}>{props.children}</View>;
};
const styles = StyleSheet.create({
  ContainerStyle: {
   
    position: "relative",
    flexWrap: "wrap",
    width:width*0.4,
    height:200,
    borderRadius:22,
    position: "relative",
       ...Platform.select({
            ios:{
                shadowColor:"#000000",
                shadowOpacity:0.16,
                shadowOffset:{width:0,height:1},
            },
            android:{
                elevation: 3,
                
            }, }),
  }
});
export { Card };
