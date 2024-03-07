import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const TodoItem = ({item, deleteTodo}) => {
  return (
    <TouchableOpacity onPress={() => deleteTodo(item.key)}>
      <View style={styles.item}>
        <FontAwesome name="trash-o" size={20} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
    
  )
} 

export default TodoItem

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  itemText: {
    marginLeft: 10,
   
  }
})