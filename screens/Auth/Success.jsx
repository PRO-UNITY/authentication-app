import { View, StyleSheet, Pressable, Text } from "react-native";
import { Colors, Size, Space, FontSize, FontWeight } from "../../constants";

const Success = ({ navigation }) => {
  const homeNavigateHandle = () => {
    navigation.navigate("Numberregister");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registered Succesfully</Text>
      <View
        style={[
          {
            color: Colors.white,
            backgroundColor: Colors.info,
            borderRadius: Size.ROUNDED1,
            paddingLeft: Space.P4,
            paddingRight: Space.P4,
          },
        ]}
      >
        <Pressable onPress={homeNavigateHandle} style={styles.btn}>
          <Text
            style={[
              {
                color: Colors.white,
              },
            ]}
          >
            Go back
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Space.P3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.TITLE,
    fontWeight: FontWeight.TITLE,
    color: Colors.info,
    marginBottom: Space.M3,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: Size.BUTTON,
  },
});
