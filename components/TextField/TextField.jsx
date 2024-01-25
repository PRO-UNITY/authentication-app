import { StyleSheet, TextInput, View, Image, Text } from "react-native";
import Button from "../Button/Button";
import React, { useEffect, useState } from "react";
import { Space } from "../../constants/Space";
import { Shadow } from "../../constants/Shadow";
import { Size } from "../../constants/Size";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../services";
import { useIsFocused } from "@react-navigation/native";
import Flag from "../../assets/flag.jpg";

const TextField = ({ item, setNumber }) => {
  const [num, setNum] = useState("");
  const [img, setImg] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("country");
      const item = JSON.parse(jsonValue);
      if (jsonValue != null) {
        setNum(item.dial_code);
        setImg(item.img);
      } else {
        setNum("+998");
      }
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <Button btnFunc={item}>
        <View style={styles.country}>
          <Image
            style={styles.countryFlag}
            source={img ? BASE_URL + img : Flag}
          />
          <Text>{num}</Text>
          <View style={styles.line}></View>
        </View>
      </Button>
      <TextInput
        onChange={(e) => setNumber(e.target.value)}
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
    borderRadius: Size.ROUNDED,
  },
  line: {
    backgroundColor: "grey",
    width: Size.DEFAULT,
    height: Size.H20,
  },
});
