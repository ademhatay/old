import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
          <View style={styles.squares}></View>
          <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circiular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
      flexDirection: "row",
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    squares: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
    circiular: {
      width: 12,
      height: 12,
      borderWidth: 2,
      borderColor: "#55BCF6",
      borderRadius: 5,
    }
});

export default Task