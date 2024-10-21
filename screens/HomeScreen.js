import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
      <View className={styles.container}>
        <Text
          style={{ backgroundColor: "black", color: "white", fontSize: 60 }}
        >
          hello
        </Text>
        <Button title="click me" onPress={() => console.log("ok")} />
      </View>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor:"red",
    flex: 1,
    padding:20
  },
});

