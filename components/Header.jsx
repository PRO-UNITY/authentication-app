import { StyleSheet, View, Text } from "react-native";
import { Colors, FontSize, FontWeight } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
    const navigation = useNavigation();
    const navigateSearch = () => {
        navigation.navigate("Search");
    };
    return (
        <View style={styles.header}>
            <Text
                style={{
                    fontSize: FontSize.TITLE,
                    fontWeight: FontWeight.TITLE,
                    color: Colors.orange,
                }}
            >
                Delivery
            </Text>
            <Icon
                onPress={navigateSearch}
                name="search"
                size={25}
                color={Colors.orange}
            />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
