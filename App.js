import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/Addtodo";
import Sandbox from "./components/Sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "Buy coffee", key: "1" },
    { title: "Walk dog", key: "2" },
    { title: "Wash car", key: "3" },
  ]);

  const pressHandler = (key) => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          setTodos((prevTodo) => {
            return prevTodo.filter((todo) => todo.key != key);
          });
        },
      },
    ]);
  };

  const submitHandler = (title) => {
    if (title.length > 3) {
      setTodos((prevTodos) => {
        return [{ title: title, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "OOPS!",
        "You should type a ToDoList longer then 3 caracters",
        [{ text: "Understood", onPress: () => console.log("alert is closed") }]
      );
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
