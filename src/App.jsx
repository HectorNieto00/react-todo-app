import React, {useState} from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // State to manage filter

  const addTodo = (text) => {
    if (text.trim() === '') return; // Prevent adding empty todos
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]); // Add new todo to the list
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !==id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  };

  return (
    <div className='app'>
      <h1 className='title'>ToDo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos}
        filter={filter}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <FilterTodo 
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
