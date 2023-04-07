import TodoAdd from './components/todoAdd/TodoAdd';
import TodoList from './components/todoList/TodoList';
import TodoCounter from './components/todoCounter/TodoCounter';
import { TodoProvider } from './context/TodoProvider';

import './App.css';

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
