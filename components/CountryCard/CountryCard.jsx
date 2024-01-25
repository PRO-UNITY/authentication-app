import { StyleSheet, Pressable, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { countries } from "../../mock/data";
import { Space } from "../../constants/Space";
import { Size } from "../../constants/Size";
import { Shadow } from "../../constants/Shadow";
import { FontWeight } from "../../constants/FontWeight/index";
import { FontSize } from "../../constants/FontSize/index";
import { BASE_URL, GetCountry } from "../../services";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CountryCard = ({ navigation }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    GetCountry().then((res) => {
      setCountries(res);
    });
  }, []);

  const storeData = async (item) => {
    try {
      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem("country", jsonValue);
      navigation.navigate("Numberregister");
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      {countries.map((i, index) => (
        <Pressable
          onPress={() => storeData(i)}
          key={index}
          style={{ padding: Space.P2, width: "50%" }}
        >
          <View style={styles.cardDetails}>
            <View>
              <Image style={styles.countryFlag} source={BASE_URL + i.img} />
              <Text style={styles.name}>{i.name}</Text>
            </View>
            <Text style={styles.number}>{i.dial_code}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: Shadow.shadow,
    padding: Space.P2,
    borderRadius: Space.P2,
  },
  countryFlag: {
    width: Size.BUTTON,
    height: Size.BUTTON,
    borderRadius: Size.ROUNDED,
    marginBottom: Space.M2,
  },
  number: {
    fontSize: FontSize.DESCRIPTION,
    fontWeight: FontWeight.DESCRIPTION,
    color: "grey",
  },
  name: {
    fontSize: FontSize.CONTENTSM,
    fontWeight: FontWeight.CONTENT,
  },
  letter: {
    fontSize: FontSize.CONTENT,
    fontWeight: FontWeight.CONTENT,
    color: "grey",
    marginBottom: Space.M2,
  },
});
