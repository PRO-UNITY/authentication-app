import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Size } from "../../constants/Size";

const Button = ({ children, btnFunc }) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={btnFunc}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: Size.BUTTON,
  },
});
