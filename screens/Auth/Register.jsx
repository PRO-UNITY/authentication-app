import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Picker,
} from "react-native";
import { Button } from "../../components";
import { Colors } from "../../constants/Colors/index";
import { Space } from "../../constants/Space";
import { Size } from "../../constants/Size";
import { FontSize } from "../../constants/FontSize";
import { FontWeight } from "../../constants/FontWeight";
import { Shadow } from "../../constants/Shadow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignUpUser } from "../../services";

const Register = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [dial_code, setDial_code] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gander, setGander] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const phone_number = await AsyncStorage.getItem("phone");
      const code = await AsyncStorage.getItem("country");
      const code_dial = JSON.parse(code);
      if (phone_number !== null) {
        setPhone(phone_number);
        setDial_code(code_dial.dial_code);
      }
    } catch (e) {}
  };

  const handleSignUp = () => {
    const signUpData = {
      username: name,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      gender: gander,
      phone: dial_code + phone,
    };
    console.log(signUpData);
    SignUpUser(signUpData)
      .then(async (res) => {
        navigation.navigate('Numberregister')
      })
      .catch((err) => console.log(err));
  };

  console.log(dial_code + phone);
  return (
    <View style={styles.container}>
      <Text style={styles.headTitle}>Fill in The Form With Your Data</Text>
      <Text style={styles.description}>
        Create a new account to make it easier for you to bid anywhere and
        anytime
      </Text>
      <View style={styles.form}>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            onChange={(e) => setName(e.target.value)}
            placeholder="John"
            placeholderTextColor={"grey"}
            style={[styles.input, { outline: Size.NONE }]}
          />
        </View>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            inputMode="email-address"
            placeholder="example@gmail.com"
            placeholderTextColor={"grey"}
            style={[styles.input, { outline: Size.NONE }]}
          />
        </View>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            placeholderTextColor={"grey"}
            style={[styles.input, { outline: Size.NONE }]}
          />
        </View>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            onChange={(e) => setConfirmPassword(e.target.value)}
            secureTextEntry
            placeholder="********"
            placeholderTextColor={"grey"}
            style={[styles.input, { outline: Size.NONE }]}
          />
        </View>
        <View style={{ marginBottom: Space.M2 }}>
          <Text style={styles.label}>Gander</Text>
          <Picker
            gander={gander}
            onValueChange={(itemValue, itemIndex) => setGander(itemValue)}
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
          <Pressable onPress={handleSignUp} style={styles.btn}>
            <Text
              style={[
                {
                  color: Colors.white,
                },
              ]}
            >
              Next
            </Text>
          </Pressable>
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
    right: Size.NONE,
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
