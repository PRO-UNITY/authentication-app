import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextField } from "../../components";
import { Colors } from "../../constants/Colors/index";
import { Size } from "../../constants/Size";
import { Space } from "../../constants/Space";
import { FontSize } from "../../constants/FontSize";
import { FontWeight } from "../../constants/FontWeight";

const NumberRegister = ({ navigation }) => {
  const homeNavigateHandle = () => {
    navigation.navigate("Countries");
  };
  const registerNavigateHandle = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headTitle}>
        Create a New <br />
        account
      </Text>
      <Text style={styles.description}>
        Create a new account to make it easier for you to <br />
        bid anywhere and anytime
      </Text>
      <View style={styles.inputCard}>
        <TextField item={homeNavigateHandle} />
      </View>
      <View style={styles.btnCard}>
        <View
          style={[
            {
              color: Colors.white,
              backgroundColor: Colors.info,
              borderRadius: Size.ROUNDED1,
              paddingLeft: Space.P4,
              paddingRight: Space.P4,
            },
          ]}
        >
          <TouchableOpacity onPress={registerNavigateHandle} style={styles.btn}>
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

      <View style={styles.bottomPart}>
        <Text style={styles.textBottomPart}>Already have an Account?</Text>
        <View>
          <Button>
            <Text
              style={[
                {
                  color: Colors.info,
                },
              ]}
            >
              SIGN IN
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default NumberRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Space.P3,
    justifyContent: "center",
    position: "relative",
  },
  headTitle: {
    color: Colors.darkBlue,
    fontSize: FontSize.TITLE,
    fontWeight: FontWeight.TITLE,
    marginBottom: Space.M3,
  },
  description: {
    fontSize: FontSize.CONTENT,
    color: "grey",
    marginBottom: Space.M3,
  },
  inputCard: {
    marginBottom: Space.M3,
  },
  btnCard: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomPart: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  textBottomPart: {
    color: "grey",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: Size.BUTTON,
  },
});
