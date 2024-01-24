import { StyleSheet, TextInput, View, Image, Text } from "react-native";
import React from "react";
import { countries } from "../../mock/data";
import { Space } from "../../constants/Space";
import { Size } from "../../constants/Size";
import { Shadow } from "../../constants/Shadow";
import { FontWeight } from "../../constants/FontWeight/index";
import { FontSize } from "../../constants/FontSize/index";

const CountryCard = (item) => {
  return (
    <>
      {countries.map((item, index) => (
        <View key={index} style={{ marginBottom: Space.M3 }}>
          <Text style={styles.letter}>{item.letter}</Text>
          <View style={styles.container}>
            {item.details.map((i, ind) => (
              <View key={ind} style={{padding:Space.P2, width:Size.W50}}>
                <View style={styles.cardDetails}>
                  <View>
                    <Image style={styles.countryFlag} source={i.image} />
                    <Text style={styles.name}>{i.name}</Text>
                  </View>
                  <Text style={styles.number}>{i.number}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
    </>
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
    width: Size.W100,
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
    fontWeight :FontWeight.CONTENT
  },
  letter: {
    fontSize: FontSize.CONTENT,
    fontWeight: FontWeight.CONTENT,
    color: "grey",
    marginBottom: Space.M2,
  },
});
