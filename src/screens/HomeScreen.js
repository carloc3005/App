import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
      <View>
    <Text style={styles.text}>Chelshey is my slave!</Text>
    <Button
        onPress={() => navigation.navigate('Components')}
        title={"Go to Components Demo"}
    />
    <Button title={"Go to List Demo"}
            onPress={() => navigation.navigate('List')}
    />
    <Button title={"Go to Image Screen"}
            onPress={() => navigation.navigate('Image')}
    />

  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
