import { createContext, useState, useEffect, useContext } from 'react';
import { getTodos } from '../api/todoApi'

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        getTodos().then(({ data }) => {
            if (!data) return false;
            setTodoList(data);
        });
    }, []);

    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    );
}

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };