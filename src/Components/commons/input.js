import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from "react-native";

const Input = props => {
  let _keyboardType = "default",
    _secureInput = false;

  switch (props.type) {
    
    case "Password":
      {
        _keyboardType = "default";
        _secureInput = true;
      }
      break;
    case "Number":
      {
        _keyboardType = "numeric";
      }
      break;
    case "Email":
      {
        _keyboardType = "email-address";
      }
      break;
    case "TextArea":
      {
        _keyboardType = "default";
        multiline = true;
        style = styles.textArea;
      }
      break;
    default: {
      _keyboardType = "default";
    }
  }
  return (
    <View style={props.inputContainer}>
      <Image
          source={props.Inputicon}
          style={ props.InputIconStyle}
        />
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={"#bfbfbf"}
        style={props.StyleInput}
        type={props.type}
        keyboardType={_keyboardType}
        secureTextEntry={_secureInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        multiline={props.multiline}
      />
      <TouchableOpacity onPress={props.changeIcon}>
        <Image
          source={props.icon}
          style={[styles.iconContainer, props.textAreaStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  

  iconContainer: {
    width: 14,
    height: 14
  }
});

export { Input };
