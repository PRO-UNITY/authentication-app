import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Image, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Button from "../Button/Button";
import { Space, Shadow, Size, Colors } from "../../constants";
import { BASE_URL } from "../../services";
import { GetObjectFromStorage } from "../../utils/Storage";
import Flag from "../../assets/flag.jpg";

const TextField = ({ item, setNumber }) => {
  const [num, setNum] = useState("");
  const [img, setImg] = useState("");
  const isFocused = useIsFocused();
  const imageUrl = img ? BASE_URL + img : Flag;

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    GetObjectFromStorage("country").then((res) => {
      setNum(res?.dial_code), setImg(res.img);
    });
  };

  return (
    <View style={styles.container}>
      <Button btnFunc={item}>
        <View style={styles.country}>
        <Image
          style={styles.countryFlag}
          source={{ uri: imageUrl }}
        />
          <Text>{num ? num : "+998"}</Text>
          <View style={styles.line}></View>
        </View>
      </Button>
      <TextInput
        onChangeText={setNumber}
        style={styles.input}
        placeholder="Your phone number"
        placeholderTextColor={"grey"}
        inputMode='numeric'
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
    paddingHorizontal: Space.P2,
    color:Colors.darkBlue,
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
