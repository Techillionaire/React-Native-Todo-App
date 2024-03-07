import { Alert, FlatList, StyleSheet, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React, {useState} from 'react'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodo] = useState([
    {text: "buy me a coffee", key: "1"},
    {text: "create an app", key: "2"},
    {text: "play on the switch", key: "3"},
  ])

  const deleteTodo = (key) => {
    setTodo((prevtodo) => {
      return prevtodo.filter(todo => todo.key != key)
    })
  }

  const addTodo = (text) => {
    if(text.length > 3){
      setTodo(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todos must be over 3 characters long', [
        {text: 'I gat you', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log("dismissed?")
    }}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <TodoForm addTodo={addTodo}/>

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} deleteTodo={deleteTodo}/>
              )}
            />

          </View>

        </View>


    </View>
    </TouchableWithoutFeedback>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
})