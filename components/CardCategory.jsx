import { View, Text, StyleSheet, Image } from "react-native";
import { Space, Colors, Size } from "../constants";

const CardCategory = (props) => {
    const { name, img } = props.item;
    console.log(props);
    return (
        <View style={styles.card}>
            <Image
                style={{
                    width: 40,
                    height: 40,
                    objectFit: "cover",
                    borderRadius: Size.ROUNDED,
                }}
                source={{ uri: img }}
            />
            <Text style={{ fontSize: 12, color: Colors.orange }}>
                {name.length > 6 ? name.slice(0, 5)+"..." : name}
            </Text>
        </View>
    );
};

export default CardCategory;

const styles = StyleSheet.create({
    card: {
        width: 80,
        flexDirection: "column",
        backgroundColor: Colors.white,
        borderRadius: 8,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        padding: Space.P2,
        gap: Space.G1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: Space.M2,
    },
});
