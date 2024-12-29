import { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState({});

  function goalInputHandler(inputText) {
    if (!inputText) return;
    setEnteredGoalText(inputText);
  }

  function addGoalHandler() {
    props.addGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.Image}
        />
        <TextInput
          style={styles.inputField}
          placeholder="your goals"
          onChangeText={goalInputHandler}
          defaultValue={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  Image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  inputField: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#e4d0ff",
    borderWidth: 2,
    borderRadius: 8,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
