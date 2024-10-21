import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import AboutDetails from "../components/AboutDetails";
import { TextInput } from "react-native";
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
      <Text style={styles.intoText}>
        Welcome back! Glad to see you, Again!
      </Text>
      <View>
        <TextInput placeholder="Enter Your Mail"/>
      </View>
      {/* <AboutDetails/> */}
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  intoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
});
