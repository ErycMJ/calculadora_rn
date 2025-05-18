import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { Button } from "react-native-paper";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.fonte}>
        Contador: {count}
      </Text>
      
      <View style={styles.row}>
      <View style={styles.clearAllButton}>
      <Button mode="contained" onPress={() => setCount(count + 1)}>
        Clear All
      </Button>
      </View>

      <Button mode="contained" onPress={() => setCount(0)}>
        ↩
      </Button>
      <Button mode="contained" onPress={() => setCount(0)}>
        ÷
      </Button>
      </View>

      <View style={styles.row}>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          7
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          8
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          9
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          ×
        </Button>
      </View>

      <View style={styles.row}>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          6
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          5
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          4
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          -
        </Button>
      </View>

      <View style={styles.row}>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          3
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          2
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          1
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          +
        </Button>
      </View>
      <StatusBar style="auto" />

      <View style={styles.row}>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          +/-
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          0
        </Button>
        <Button mode="contained" onPress={() => setCount(count + 1)}>
          ,
        </Button>
      <Button mode="contained" onPress={() => setCount(0)}>
        =
      </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  fonte: {
    fontSize: 24,
    color: "#fff"
  },
  clearAllButton: {
    minWidth: 130,
    buttonColor: "#b00020"
  },
  numButton: {
    margin: 10,
    backgroundColor: "#6200ee"
  },
  operationButton: {
    margin: 10,
    backgroundColor: "#03dac6"
  },
  clearButton: {
    margin: 10,
    backgroundColor: "#b00020"
  },
  equalButton: {
    margin: 10,
    backgroundColor: "#6200ee"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  }
});
