import TabNavigators from "./TabNavigators";
import { Register, Login, ForgetPassword } from "../screens";;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
    return (
        <RootStack.Navigator  screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Register" component={Register} />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="ForgetPassword" component={ForgetPassword} />
            <RootStack.Screen name="TabStack" component={TabNavigators} />
        </RootStack.Navigator>
    );
};

export default RootNavigator;
