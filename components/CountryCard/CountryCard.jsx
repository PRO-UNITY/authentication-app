import { StyleSheet, Pressable, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Space, Size, Shadow, FontWeight, FontSize } from "../../constants";
import { BASE_URL, GetCountrySearch } from "../../services";
import { SetObjectToStorage } from "../../utils/Storage";

const CountryCard = ({ navigation, search }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    GetCountrySearch(search).then((res) => {
      setCountries(res);
    });
  }, [search]);

  const storeData = async (item) => {
    SetObjectToStorage("country", item).then(() =>
      navigation.navigate("Numberregister")
    );
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
              <Image style={styles.countryFlag} source={{uri:BASE_URL + i.img}} />
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
