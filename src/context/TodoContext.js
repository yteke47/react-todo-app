import { createContext, useState, useEffect, useContext } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
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

const useTodo = () => useContext(TodoContext)

export { useTodo, TodoProvider }