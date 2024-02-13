import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Space, Colors, Size, FontSize, FontWeight } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";

const CardFood = (props) => {
    const { name, img } = props.item;
    console.log(props);
    return (
        <View style={styles.card}>
            <Image
                style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: Size.ROUNDED,
                }}
                source={{ uri: img }}
            />
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "start",
                        gap: Space.G1,
                    }}
                >
                    <View style={{ flexDirection: "row" }}>
                        <Icon name="star" size={15} color={Colors.orange} />
                        <Icon name="star" size={15} color={Colors.orange} />
                        <Icon name="star" size={15} color={Colors.orange} />
                        <Icon name="star" size={15} color={Colors.orange} />
                        <Icon name="star" size={15} color={Colors.orange} />
                    </View>
                    <Text
                        style={{
                            fontSize: FontSize.CONTENT,
                            color: "black",
                            fontWeight: FontWeight.TITLE,
                        }}
                    >
                        {name.length > 6 ? name.slice(0, 5) + "..." : name}
                    </Text>
                </View>
                <Pressable style={styles.btn}>
                    <Text
                        style={styles.btnText}
                    >
                        +
                    </Text>
                </Pressable>
            </View>
            <Pressable style={styles.favourite}><Icon name="heart" size={20} color={Colors.light}/></Pressable>
        </View>
    );
};

export default CardFood;

const styles = StyleSheet.create({
    card: {
        position:'relative',
        width: "48%",
        height: 160,
        flexDirection: "column",
        backgroundColor: Colors.white,
        borderRadius: Size.ROUNDED2,
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
    btn: {
        width: 30,
        height: 30,
        borderRadius: Size.ROUNDED1,
        backgroundColor: Colors.orange,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    btnText:{
        fontSize:FontSize.DESCRIPTION,
        color:Colors.white,
    },
    favourite:{
        position:"absolute",
        top:10,
        right:10,
    }
});
