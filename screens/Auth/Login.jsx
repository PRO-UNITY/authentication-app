import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Colors, FontSize, Size, Space } from "../../constants";
import { Picker } from "@react-native-picker/picker";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigateRegister = () => {
        navigation.navigate("Register");
    };

    const handleSignUp = () => {
        navigation.navigate('TabStack')
    }

    const navigateForgetPAssword = () => {
        navigation.navigate('ForgetPassword')
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={{ fontSize: FontSize.DESCRIPTION }}>
                        Login
                    </Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={{ marginBottom: 5 }}>Username</Text>
                    <TextInput
                        onChangeText={setUsername}
                        style={styles.input}
                    ></TextInput>
                    <Text style={{ marginBottom: 5 }}>Password</Text>
                    <TextInput
                        onChangeText={setPassword}
                        style={styles.input}
                    ></TextInput>

                    <View style={styles.btnCard}>
                        <View
                            style={[
                                {
                                    flexDirection: "row",
                                    backgroundColor: Colors.info,
                                    borderRadius: Size.ROUNDED1,
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    paddingTop:Space.P2
                                },
                            ]}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    gap: Space.G1,
                                }}
                            >
                                <Pressable onPress={navigateRegister}>
                                    <Text style={styles.link}>Register</Text>
                                </Pressable>
                                <Pressable onPress={navigateForgetPAssword}>
                                    <Text style={styles.link}>
                                        Forget Password
                                    </Text>
                                </Pressable>
                            </View>
                            <Pressable
                                onPress={handleSignUp}
                                style={[styles.btn]}
                            >
                                <Text>Next</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: Space.P3,
        justifyContent: "center",
    },
    card: {
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
    },
    cardHeader: {
        borderTopLeftRadius: Size.ROUNDED1,
        borderTopRightRadius: Size.ROUNDED1,
        backgroundColor: Colors.orange,
        padding: Space.P2,
    },
    cardBody: {
        padding: Space.P2,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.light,
        borderRadius: Size.ROUNDED1,
        padding: Space.P1,
    },
    btn: {
        backgroundColor: Colors.orange,
        width: 100,
        padding: Space.P2,
        borderRadius: Size.ROUNDED1,
        flexDirection: "row",
        justifyContent: "center",
    },
    link: {
        textDecorationLine: "underline",
        color: Colors.orange,
    },
});
