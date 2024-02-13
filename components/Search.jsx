import { View, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Size, Space, Colors } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";

const SearchComponent = () => {
    return (
        <View style={styles.search}>
            <TextInput style={styles.input}></TextInput>
            <Pressable style={styles.icon}>
                <Icon name="search" size={25} color={Colors.white} />
            </Pressable>
        </View>
    );
};

export default SearchComponent;

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        height: 40,
        flex: 5,
        borderWidth: 1,
        borderColor: Colors.light,
        borderTopLeftRadius: Size.ROUNDED1,
        borderBottomLeftRadius: Size.ROUNDED1,
        paddingHorizontal: Space.P2,
    },
    icon: {
        height: 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: Size.ROUNDED1,
        borderBottomRightRadius: Size.ROUNDED1,
        backgroundColor: Colors.orange,
    },
});
