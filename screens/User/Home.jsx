import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Size, Space, Colors, FontSize, FontWeight } from "../../constants";
import { Categories, Kitchens, Foods } from "../../mock/data";
import { CardCategory } from "../../components";
import CardFood from "../../components/CardFood";

const Home = () => {
    console.log(Kitchens);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: FontWeight.TITLE,
                            color: Colors.white,
                        }}
                    >
                        Det Discount Vaucher Up To 20%
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: FontWeight.DESCRIPTION,
                            color: Colors.white,
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque reiciendis sit doloremque aliquam
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            marginBottom: Space.M2,
                        }}
                    >
                        Categories
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 400,
                            marginBottom: Space.M2,
                            textDecorationLine: "underline",
                            color: Colors.orange,
                        }}
                    >
                        more+
                    </Text>
                </View>
                <View style={styles.categories}>
                    {Categories.map((i) => (
                        <CardCategory key={i.id} item={i} />
                    ))}
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            marginBottom: Space.M2,
                        }}
                    >
                        Restaurants
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 400,
                            marginBottom: Space.M2,
                            textDecorationLine: "underline",
                            color: Colors.orange,
                        }}
                    >
                        more+
                    </Text>
                </View>

                <View style={styles.kitchens}>
                    {Kitchens.map((i) => (
                        <CardCategory key={i.id} item={i} />
                    ))}
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.DESCRIPTION,
                            fontWeight: FontWeight.DESCRIPTION,
                            marginBottom: Space.M2,
                        }}
                    >
                        Foods
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 400,
                            marginBottom: Space.M2,
                            textDecorationLine: "underline",
                            color: Colors.orange,
                        }}
                    >
                        more+
                    </Text>
                </View>

                <View style={styles.foods}>
                    {Foods.map((i) => (
                        <CardFood key={i.id} item={i} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: Space.P3,
        justifyContent: "start",
    },
    banner: {
        height: 150,
        flexDirection: "column",
        justifyContent: "center",
        padding: Space.P2,
        gap: Space.G2,
        borderRadius: Size.ROUNDED1,
        backgroundColor: Colors.orange,
        marginBottom: Space.M2,
    },
    categories: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    kitchens: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    foods: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: Space.G2,
    },
});
