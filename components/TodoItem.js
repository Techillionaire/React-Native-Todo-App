import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TodoItem = ({item, deleteTodo}) => {
  return (
    <TouchableOpacity onPress={() => deleteTodo(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
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
  }
})