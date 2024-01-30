import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  CheckBox,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/Ionicons";

import {
  Colors,
  Space,
  Size,
  FontSize,
  FontWeight,
  Shadow,
} from "../../constants";
import {
  GetObjectFromStorage,
  GetStringFromStorage,
} from "../../utils/Storage";
import { Button } from "../../components";
import { GetGender, SignUpUser } from "../../services";
import { GetUserData, userData } from "./User";

const Register = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [dial_code, setDial_code] = useState("");
  const [gander, setGander] = useState(0);
  const [data, setData] = useState([]);
  const [isPicker, setIsPicker] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  useEffect(() => {
    getData();
    GetGender().then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    if (
      userData.name != "" &&
      userData.email.length != "" &&
      userData.password.length != "" &&
      userData.confirmPassword.length != ""
    ) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
    console.log(isTrue);
  }, [userData.confirmPassword]);

  const getData = async () => {
    GetStringFromStorage("phone").then((res) => setPhone(res));
    GetObjectFromStorage("country").then((res) => setDial_code(res?.dial_code));
  };

  const handlePicker = () => {
    setIsPicker(true);
  };

  const changeTypePassword = (id) => {
    if (id === 1) {
      setSecurePassword(!securePassword);
    } else {
      setSecureConfirmPassword(!secureConfirmPassword);
    }
  };

  const handleSignUp = () => {
    const signUpData = {
      username: userData.name,
      email: userData.email,
      password: userData.password,
      confirm_password: userData.confirmPassword,
      gender: gander,
      phone: dial_code + phone,
    };

    SignUpUser(signUpData)
      .then(async (res) => {
        navigation.navigate("Success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headTitle}>Fill in The Form With Your Data</Text>
        <Text style={styles.description}>
          Create a new account to make it easier for you to bid anywhere and
          anytime
        </Text>
        <View style={styles.form}>
          <View style={{ marginBottom: Space.M2 }}>
            <Text style={styles.label}>Name</Text>
            <View style={styles.inputIcon}>
              <TextInput
                onChangeText={(text) => GetUserData("name", text)}
                placeholder="John"
                placeholderTextColor={"grey"}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ marginBottom: Space.M2 }}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputIcon}>
              <TextInput
                onChangeText={(text) => GetUserData("email", text)}
                inputMode="email"
                placeholder="example@gmail.com"
                placeholderTextColor={"grey"}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ marginBottom: Space.M2 }}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputIcon}>
              <TextInput
                secureTextEntry={securePassword}
                onChangeText={(text) => GetUserData("password", text)}
                placeholder="********"
                placeholderTextColor={"grey"}
                style={styles.input}
              />
              <Icon
                onPress={() => changeTypePassword(1)}
                name="eye"
                size={15}
                color={"grey"}
              />
            </View>
          </View>
          <View style={{ marginBottom: Space.M2 }}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputIcon}>
              <TextInput
                secureTextEntry={secureConfirmPassword}
                onChangeText={(text) => GetUserData("confirmPassword", text)}
                placeholder="********"
                placeholderTextColor={"grey"}
                style={styles.input}
              />
              <Icon
                onPress={() => changeTypePassword(2)}
                name="eye"
                size={15}
                color={"grey"}
              />
            </View>
          </View>
          <Pressable
            onPress={handlePicker}
            style={[{ marginBottom: Space.M2 }]}
          >
            <Text style={styles.label}>Gander</Text>
          </Pressable>
          {isPicker === true ? (
            <Picker
              style={{ height: 40, color: Colors.darkBlue }}
              selectedValue={gander}
              onValueChange={(itemValue) => {
                setGander(itemValue), setIsPicker(false);
              }}
            >
              {data?.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={`${item.name}`}
                  value={`${item.id}`}
                />
              ))}
            </Picker>
          ) : (
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
                <Pressable
                  disabled={isTrue}
                  onPress={handleSignUp}
                  style={[styles.btn, { opacity: isTrue ? 0.5 : 1 }]}
                >
                  <Text style={{ color: Colors.white }}>Next</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
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
    marginBottom: Space.M4,
  },
  label: {
    fontSize: FontSize.CONTENT,
    color: "grey",
  },
  input: {
    paddingTop: Space.P2,
    paddingBottom: Space.P2,
    flex: 5,
  },
  inputIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: Space.G3,
    justifyContent: "flex-end",
    borderWidth: Size.NONE,
    borderBottomWidth: Size.DEFAULT,
    borderColor: "grey",
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
