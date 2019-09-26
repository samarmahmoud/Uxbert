import React from "react";
import { Text, TouchableOpacity, StyleSheet ,Platform} from "react-native";

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
      <Text style={props.buttonTextStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
    borderRadius: 37,
    width: 260.53,
    height: 32.4,
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 3 }
      },
      android: {
        elevation: 2
      }
    }),

  },
  buttonTextStyle: {
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    color: "#ffffff",
    fontSize: 15,
    
  }
});
export { Button };
