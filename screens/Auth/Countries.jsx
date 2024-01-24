import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { Colors } from "../../constants/Colors/index";
import { CountryCard, SearchField } from "../../components";
import { Size } from "../../constants/Size";
import { Space } from "../../constants/Space";

const Countries = ({ navigation }) => {
  const homeNavigateHandle = () => {
    navigation.navigate("Numberregister");
  };
  return (
    <View style={styles.container}>
      <SearchField item={homeNavigateHandle}></SearchField>
      <ScrollView
        style={{ marginBottom: Space.M3 }}
        showsVerticalScrollIndicator={false}
      >
        <CountryCard></CountryCard>
      </ScrollView>
      <View style={styles.bottomPart}>
        <View
          style={[
            {
              color: Colors.white,
              backgroundColor: Colors.info,
              borderRadius: Size.ROUNDED1,
              paddingLeft: Space.P3,
              paddingRight: Space.P3,
            },
          ]}
        >
          <TouchableOpacity onPress={homeNavigateHandle} style={styles.btn}>
            <Text
              style={[
                {
                  color: Colors.white,
                },
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Countries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Space.P3,
    justifyContent: "start",
    position: "relative",
  },
  bottomPart: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    position: "absolute",
    bottom: Size.NONE,
    borderWidth: Size.NONE,
    borderTopWidth: Size.DEFAULT,
    borderTopColor: Colors.light,
    width: Size.W100,
    left: Size.NONE,
    paddingLeft: Space.P3,
    paddingRight: Space.P3,
    paddingBottom: Space.P2,
    paddingTop: Space.P2,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: Size.BUTTON,
  },
});
