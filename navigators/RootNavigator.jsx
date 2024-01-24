import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Countries, NumberRegister, Register } from "../screens";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Numberregister">
      <Stack.Screen
        name="Numberregister"
        component={NumberRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Countries"
        component={Countries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
