import { StyleSheet, Text, TextInput, Button, View } from 'react-native'
import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState("")


  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder='new todo...'
        onChangeText={(val) => setText(val)}
      />
      <Button 
        onPress={() => addTodo(text )}
        title="add todo"
        color="coral"
      />
    </View>
  )
}

export default TodoForm

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})