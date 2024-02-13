import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import {
    Favourite,
    FoodOrder,
    Home,
    OrderHistory,
    Search,
    Settings,
} from "../screens";
import { Colors } from "../constants";
import { Header } from "../components";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors.white,
                activeBackgroundColor: Colors.orange,
                inactiveBackgroundColor: Colors.white,
                inactiveTintColor: Colors.orange,
                labelStyle: {
                    activeColor: Colors.white,
                },
                style: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Dashboard",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="fast-food" color={color} size={size} />
                    ),
                    headerTitle: ({}) => <Header />,
                }}
            />
            <Tab.Screen
                name="FoodOrder"
                component={FoodOrder}
                options={{
                    tabBarLabel: "FoodOrder",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cart" color={color} size={size} />
                    ),
                    headerTitle: ({}) => <Header />,
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: "Favourite",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                    headerTitle: ({}) => <Header />,
                }}
            />
            <Tab.Screen
                name="OrderHistory"
                component={OrderHistory}
                options={{
                    tabBarLabel: "OrderHistory",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list" color={color} size={size} />
                    ),
                    headerTitle: ({}) => <Header />,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="settings" color={color} size={size} />
                    ),
                    headerTitle: ({}) => <Header />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarButton: () => null,
                    headerTitle: ({}) => <Header />,
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
