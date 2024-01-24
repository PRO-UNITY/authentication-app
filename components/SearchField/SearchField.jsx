import { StyleSheet, TextInput, View, Text } from "react-native";
import Button from "../Button/Button";
import React from "react";
import { Colors } from "../../constants/Colors/index";
import Icon from "react-native-vector-icons/Ionicons";
import { Space } from "../../constants/Space";
import { Size } from "../../constants/Size";
import { Shadow } from "../../constants/Shadow";

const SearchField = (item) => {
  return (
    <View style={styles.container}>
      <View style={styles.country}>
        <View style={styles.searchbar}>
          <Icon name="search" size={25} color={"grey"} />
          <TextInput
            style={[styles.input, { outline: Size.NONE }]}
            placeholder="Search country"
            placeholderTextColor={"grey"}
          />
        </View>
        <View style={[{ color: Colors.info, flex: 1 }]}>
          <Button btnFunc={item.item}>
            <Text
              style={[
                {
                  color: Colors.info,
                },
              ]}
            >
              CANCEL
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    height: Size.TEXTFIELD,
    marginVertical: Space.M1,
    borderColor: "transparent",
    backgroundColor: Colors.white,
    borderRadius: Size.ROUNDED2,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: Shadow.shadow,
    borderRadius: Size.ROUNDED1,
    gap: Space.G1,
    flex: 5,
    paddingLeft: Space.P2,
    paddingRight: Space.P2,
  },
  country: {
    flexDirection: "row",
    width: Size.W100,
    gap: Space.G2,
    alignItems: "center",
  },
  input: {
    borderWidth: Size.NONE,
    height: Size.H100,
    flex: 5,
    padding: Space.P2,
    borderRadius: Size.ROUNDED1,
  },
});
