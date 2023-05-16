import { createContext, useState, useEffect, useContext } from 'react';

const TodoContext = createContext();

const parseLocalStorage = (itemName) => {
    return localStorage.getItem(itemName)
        ? JSON.parse(localStorage.getItem(itemName))
        : []
}

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(
        parseLocalStorage("todos")
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