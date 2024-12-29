import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddingGoals() {
    setModalIsVisible(true);
  }

  function endAddingGoal() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (!enteredGoalText) return;
    setCourseGoals((currGoals) => [
      ...currGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddingGoal();
  }

  function deleteHandler(id) {
    setCourseGoals((currGoals) => {
      return currGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddingGoals}
        />
        <GoalInput
          addGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddingGoal}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                delete={deleteHandler}
                id={itemData.item.id}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085c",
  },

  goalContainer: {
    flex: 5,
  },
});
