import TodoAdd from './components/todoAdd';
import TodoList from './components/todoList';
import TodoCounter from './components/todoCounter';

import './App.css';

import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

  useEffect(() => {
    console.log(todos)
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <div className='Wrapper'>
        <h1>Todo App!</h1>
        <TodoAdd addTodos={setTodos} todos={todos}></TodoAdd>
        <TodoList todos={todos} updateTodos={setTodos}></TodoList>
        {todos.length > 0 &&
          <TodoCounter todos={todos} updateTodos={setTodos}></TodoCounter>
        }
      </div>
    </div>
  );
}

export default App;
