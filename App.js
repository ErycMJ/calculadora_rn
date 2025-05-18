import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { Button } from "react-native-paper";
import { useState, useEffect } from "react";

export default function App() {
  const [resultado, setResultado] = useState("");

  const append = valor => {
    setResultado(prev => prev + valor);
  };

  const remove = () => {
    setResultado(prev => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fonte}>
        Resultado: {resultado}
      </Text>

      <View style={styles.row}>
        <View style={styles.clearAllButton}>
          <Button
            mode="contained"
            style={styles.clearAllButton}
            onPress={() => setResultado("")}
          >
            Clear All
          </Button>
        </View>

        <Button
          mode="contained"
          style={styles.clearButton}
          onPress={() => remove()}
        >
          ↩
        </Button>
        <Button
          mode="contained"
          style={styles.operationButton}
          onPress={() => append("÷")}
        >
          ÷
        </Button>
      </View>

      <View style={styles.row}>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("7")}
        >
          7
        </Button>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("8")}
        >
          8
        </Button>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("9")}
        >
          9
        </Button>
        <Button
          mode="contained"
          style={styles.operationButton}
          onPress={() => append("x")}
        >
          ×
        </Button>
      </View>

      <View style={styles.row}>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("6")}
        >
          6
        </Button>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("5")}
        >
          5
        </Button>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("4")}
        >
          4
        </Button>
        <Button
          mode="contained"
          style={styles.operationButton}
          onPress={() => append("-")}
        >
          -
        </Button>
      </View>

      <View style={styles.row}>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("3")}
        >
          3
        </Button>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("2")}
        >
          2
        </Button>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("1")}
        >
          1
        </Button>
        <Button
          mode="contained"
          style={styles.operationButton}
          onPress={() => append("+")}
        >
          +
        </Button>
      </View>
      <StatusBar style="auto" />

      <View style={styles.row}>
        <Button
          mode="contained"
          style={styles.operationButton}
          onPress={() => {
            if(resultado.startsWith("-")){
              setResultado(resultado.slice(1)); 
            }else if(resultado.length > 0){
              setResultado((prev) => "-" + prev);
            }
          }}
        >
          +/-
        </Button>
        <Button
          mode="contained"
          style={styles.numButton}
          onPress={() => append("0")}
        >
          0
        </Button>
        <Button
          mode="contained"
          style={styles.operationButton}
          onPress={() => append(",")}
        >
          ,
        </Button>
        <Button
          mode="contained"
          style={styles.equalButton}
          onPress={() => {
            try {
              const expressao = resultado
                .replace(/x/g, "*")
                .replace(/÷/g, "/")
                .replace(/,/g, ".");

              const valorCalculado = eval(expressao);
              setResultado(String(valorCalculado));
            } catch (e) {
              setResultado("Erro");
            }
          }}
        >
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
    margin: 20,
    color: "#fff"
  },
  clearAllButton: {
    minWidth: 130,
    buttonColor: "#b00020"
  },
  numButton: {
    margin: 2,
    backgroundColor: "#6200ee"
  },
  operationButton: {
    margin: 2,
    backgroundColor: "#03dac6"
  },
  clearButton: {
    margin: 2,
    backgroundColor: "#b00020"
  },
  equalButton: {
    margin: 2,
    backgroundColor: "#6200ee"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  }
});
