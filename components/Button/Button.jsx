import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { Size } from "../../constants";

const Button = ({ children, btnFunc }) => {
  return (
    <Pressable style={[styles.button]} onPress={btnFunc}>
      {children}
    </Pressable>
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
