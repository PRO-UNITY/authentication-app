import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Image, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Button from "../Button/Button";
import { Space, Shadow, Size, Colors } from "../../constants";
import { BASE_URL, GetCountry } from "../../services";
import { GetObjectFromStorage } from "../../utils/Storage";
import { Countries } from "../../mock/data";

const TextField = ({ item, setNumber }) => {
    const [num, setNum] = useState("");
    const [img, setImg] = useState(null);
    const [defaultImg, setDefaultImg] = useState(null);
    const [defaultDial, setDefaultDial] = useState(null);
    const [countries, setCountries] = useState(Countries);
    const isFocused = useIsFocused();

    useEffect(() => {
        getData();
        setDefaultImg(countries[0].img);
        setDefaultDial(countries[0].dial_code);
    }, [isFocused]);

    const getData = async () => {
        GetObjectFromStorage("country").then((res) => {
            setNum(res?.dial_code), setImg(res?.img);
        });
    };

    return (
        <View style={styles.container}>
            <Button btnFunc={item}>
                <View style={styles.country}>
                    <Image
                        style={styles.countryFlag}
                        source={{ uri: img ? img : defaultImg }}
                    />
                    <Text>{num ? num : defaultDial}</Text>
                    <View style={styles.line}></View>
                </View>
            </Button>
            <TextInput
                onChangeText={setNumber}
                style={styles.input}
                placeholder="Your phone number"
                placeholderTextColor={"grey"}
                inputMode="numeric"
            />
        </View>
    );
};

export default TextField;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        height: Size.TEXTFIELD,
        marginVertical: Space.M1,
        borderColor: "transparent",
        boxShadow: Shadow.shadow,
        padding: Space.P2,
        borderRadius: Size.ROUNDED2,
    },
    country: {
        flexDirection: "row",
        gap: Space.G2,
        alignItems: "center",
    },
    input: {
        borderWidth: Size.NONE,
        paddingHorizontal: Space.P2,
        color: Colors.darkBlue,
    },
    countryFlag: {
        width: Size.BUTTON,
        height: Size.BUTTON,
        borderRadius: Size.ROUNDED,
    },
    line: {
        backgroundColor: "grey",
        width: Size.DEFAULT,
        height: Size.H20,
    },
});
