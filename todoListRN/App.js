import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import Task from './components/Task';

export default function App() {


  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    dismissKeyboard();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completetask= (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>

          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return <TouchableOpacity key={index} onPress={() => completetask(index)}>
                    <Task   text={item}/>
                </TouchableOpacity>
              })
            }
              {/* <Task text="text111"/>
              <Task text="text2"/> */}
          </View>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    backgroundColor: "#fff",
    width: 250,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: "#C0C0C0",
  },
  addWrapper: {},
  addText: {
    fontSize: 35,
    backgroundColor: "#55BCF6",
    width: 50,
    height: 50,
    borderRadius: 60,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
  },
});
