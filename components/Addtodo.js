import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (value) => {
    return setText(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Write something ...."
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title={"Add"} color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
});
