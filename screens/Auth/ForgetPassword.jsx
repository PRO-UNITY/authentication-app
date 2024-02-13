import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Colors, FontSize, Size, Space } from "../../constants";
import { Picker } from "@react-native-picker/picker";

const ForgetPassword = ({ navigation }) => {
    const [isPicker, setIsPicker] = useState(false);
    const [isTrue, setIsTrue] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState(0);

    const handlePicker = () => {
        setIsPicker(true);
    };

    const handleSignUp = async () => {
        const user = {
            first_name: firstname,
            last_name: lastname,
            username: username,
            email: email,
            role: role,
            password: password,
            confirm_password: confirmpassword,
        };

        try {
            const res = await postData(user, "/auth/signup");
            if (res && res.token) {
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            setAlertMessage({
                text: `Error during registration: ${error}`,
                type: "danger",
            });
        }
    };

    const navigateBack = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={{ fontSize: FontSize.DESCRIPTION }}>
                        Forget Password
                    </Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={{ marginBottom: 5 }}>Email</Text>
                    <TextInput
                        onChangeText={setUsername}
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
                                <Pressable onPress={navigateBack}>
                                    <Text style={styles.link}>Back</Text>
                                </Pressable>
                            </View>
                            <Pressable
                                disabled={isTrue}
                                onPress={handleSignUp}
                                style={[
                                    styles.btn,
                                    { opacity: isTrue ? 0.5 : 1 },
                                ]}
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

export default ForgetPassword;

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
