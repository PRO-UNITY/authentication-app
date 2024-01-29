import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../Button/Button";
import { Colors, Space, Size, Shadow } from "../../constants";

const SearchField = ({ item, setSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.country}>
        <View style={styles.searchbar}>
          <Icon name="search" size={25} color={"grey"} />
          <TextInput
            onChangeText={setSearch}
            style={styles.input}
            placeholder="Search country"
            placeholderTextColor={"grey"}
          />
        </View>
        <View style={styles.cancelBtn}>
          <Button btnFunc={item}>
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
    height: Size.TEXTFIELD,
    marginVertical: Space.M1,
    borderColor: "transparent",
    backgroundColor: "",
    borderRadius: Size.ROUNDED2,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    boxShadow: Shadow.shadow,
    borderRadius: Size.ROUNDED1,
    gap: Space.G1,
    flex: 5,
    paddingLeft: Space.P2,
    paddingRight: Space.P2,
  },
  country: {
    flexDirection: "row",
    gap: Space.G2,
    justifyContent: "space-between",
  },
  input: {
    borderWidth: Size.NONE,
    padding: Space.P2,
    borderRadius: Size.ROUNDED1,
  },
  cancelBtn: {},
});
