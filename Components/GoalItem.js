import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  function deleteHandler() {
    props.delete(props.id);
  }

  return (
    <View style={styles.goalTextContainer}>
      <Pressable android_ripple={{ color: "red" }} onPress={deleteHandler}>
        <Text style={styles.goalText}>{props.text} </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalTextContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    fontSize: 20,
  },
  goalText: {
    color: "gray",
    padding: 8,
  },
});
