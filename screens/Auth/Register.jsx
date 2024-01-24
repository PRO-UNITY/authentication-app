import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";
import { Button } from "../../components";
import { Colors } from "../../constants/Colors/index";
import { Space } from "../../constants/Space";
import { Size } from "../../constants/Size";
import { FontSize } from "../../constants/FontSize";
import { FontWeight } from "../../constants/FontWeight";
import { Shadow } from "../../constants/Shadow";

const Register = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <View style={styles.container}>
      <Text style={styles.headTitle}>
        Fill in The Form <br />
        With Your Data
      </Text>
      <Text style={styles.description}>
        Create a new account to make it easier for you to bid anywhere and
        anytime
      </Text>
      <View style={styles.form}>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="John"
            placeholderTextColor={"grey"}
            style={[styles.input, { outline: Size.NONE }]}
          />
        </View>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="example@gmail.com"
            placeholderTextColor={"grey"}
            style={[styles.input, { outline: Size.NONE }]}
          />
        </View>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            placeholder="********"
            placeholderTextColor={"grey"}
            style={[styles.input, { outline: Size.NONE }]}
          />
        </View>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            secureTextEntry
            placeholder="********"
            placeholderTextColor={"grey"}
            style={[styles.input, { outline: Size.NONE }]}
          />
        </View>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Gander</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            style={{
              borderWidth: Size.NONE,
              paddingTop: Space.P2,
              paddingBottom: Space.P2,
              outline: Size.NONE,
            }}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="No said" value="No said" />
          </Picker>
        </View>
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
          <TouchableOpacity style={styles.btn}>
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
        <View
          style={[
            {
              color: Colors.info,
            },
          ]}
        >
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

export default Register;

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
  form: {
    borderRadius: Size.ROUNDED1,
    width: Size.W100,
    boxShadow: Shadow.shadow,
    paddingVertical: Space.P2,
    paddingHorizontal: Space.P3,
    marginBottom: Space.M3,
  },
  label: {
    fontSize: FontSize.CONTENT,
    color: "grey",
  },
  input: {
    borderWidth: Size.NONE,
    borderBottomWidth: Size.DEFAULT,
    borderColor: "grey",
    paddingTop: Space.P2,
    paddingBottom: Space.P2,
  },
  bottomPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.white,
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
  btnCard: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: Size.BUTTON,
  },
});
