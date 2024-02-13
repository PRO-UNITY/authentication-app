import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Colors, FontSize, Size, Space } from "../../constants";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/Ionicons";

const Register = ({ navigation }) => {
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
        // const user = {
        //     first_name: firstname,
        //     last_name: lastname,
        //     username: username,
        //     email: email,
        //     role: role,
        //     password: password,
        //     confirm_password: confirmpassword,
        // };

        // try {
        //     const res = await postData(user, "/auth/signup");
        //     if (res && res.token) {
        //         setTimeout(() => {

        //             navigate("/login");
        //         }, 2000);
        //     }
        // } catch (error) {
        //     setAlertMessage({
        //         text: `Error during registration: ${error}`,
        //         type: "danger",
        //     });

        // }
        navigation.navigate("Login");
    };

    const navigateLogin = () => {
        navigation.navigate("Login");
    };
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={{ fontSize: FontSize.DESCRIPTION }}>
                        Register
                    </Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={{ marginBottom: 5 }}>Firstname</Text>
                    <TextInput
                        onChangeText={setFirstname}
                        style={styles.input}
                    ></TextInput>
                    <Text style={{ marginBottom: 5 }}>Lastname</Text>
                    <TextInput
                        onChangeText={setLastname}
                        style={styles.input}
                    ></TextInput>
                    <Text style={{ marginBottom: 5 }}>Email</Text>
                    <TextInput
                        onChangeText={setEmail}
                        style={styles.input}
                    ></TextInput>
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
                    <Text style={{ marginBottom: 5 }}>Confirm_cassword</Text>
                    <TextInput
                        onChangeText={setConfirmPassword}
                        style={styles.input}
                    ></TextInput>

                    <Pressable
                        onPress={handlePicker}
                        style={[{ marginBottom: Space.M2 }]}
                    >
                        <Text style={styles.label}>Role</Text>
                    </Pressable>
                    {isPicker === true ? (
                        <Picker
                            style={{ height: 40, color: Colors.darkBlue }}
                            selectedValue={"gander"}
                            onValueChange={() => {
                                setIsPicker(false);
                            }}
                        >
                            <Picker.Item label={`ssd`} value={`ssd`} />
                            <Picker.Item label={`ssd`} value={`ssd`} />
                            <Picker.Item label={`ssd`} value={`ssd`} />
                        </Picker>
                    ) : (
                        <View style={styles.btnCard}>
                            <View
                                style={[
                                    {
                                        flexDirection: "row",
                                        backgroundColor: Colors.info,
                                        borderRadius: Size.ROUNDED1,
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    },
                                ]}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: Space.G1,
                                    }}
                                >
                                    <Pressable onPress={navigateLogin}>
                                        <Text style={styles.link}>Login</Text>
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
                    )}
                </View>
            </View>
        </View>
    );
};

export default Register;

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
