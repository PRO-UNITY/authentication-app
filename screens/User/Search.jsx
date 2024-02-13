import { View, Text, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Space, Colors } from "../../constants";
import { SearchComponent } from "../../components";

const Search = () => {
    return (
        <View style={styles.container}>
            <SearchComponent />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: Space.P3,
        justifyContent: "start",
    },
});
