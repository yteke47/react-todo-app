import TodoAdd from './components/todoAdd/TodoAdd';
import TodoList from './components/todoList/TodoList';
import TodoCounter from './components/todoCounter/TodoCounter';
import { useState, useEffect } from 'react';
import TodoContext from './context/TodoContext';

import './App.css';

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <div className="App">
        <div className='Wrapper'>
          <h1>Todo App!</h1>
          <TodoAdd />
          <TodoList />
          <TodoCounter />
        </div>
      </div>
    </TodoProvider>
  );
}
