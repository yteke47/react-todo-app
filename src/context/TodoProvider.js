import { useState, useEffect } from 'react';
import TodoContext from './TodoContext';

export function TodoProvider({ children }) {
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
