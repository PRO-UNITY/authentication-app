import { StyleSheet, TextInput, View, Image, Text } from "react-native";
import Button from "../Button/Button";
import React, { useState } from "react";
import { Space } from "../../constants/Space";
import { Shadow } from "../../constants/Shadow";
import { Size } from "../../constants/Size";

const TextField = (item) => {
  return (
    <View style={styles.container}>
      <Button btnFunc={item.item}>
        <View style={styles.country}>
          <Image
            style={styles.countryFlag}
            source={require("../../assets/user.jpg")}
          />
          <Text>+1</Text>
          <View style={styles.line}></View>
        </View>
      </Button>
      <TextInput
        style={[styles.input, { outline: Size.NONE }]}
        placeholder="Your phone number"
        placeholderTextColor={"grey"}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    height: Size.TEXTFIELD,
    marginVertical: Space.M1,
    borderColor: "transparent",
    boxShadow: Shadow.shadow,
    padding: Space.P2,
    borderRadius: Size.ROUNDED2,
  },
  country: {
    flexDirection: "row",
    gap: Space.G2,
    alignItems: "center",
  },
  input: {
    borderWidth: Size.NONE,
    padding: Space.P2,
  },
  countryFlag: {
    width: Size.BUTTON,
    height: Size.BUTTON,
    borderRadius: Size.W50,
  },
  line: {
    backgroundColor: "grey",
    width: Size.DEFAULT,
    height: Size.H20,
  },
});
