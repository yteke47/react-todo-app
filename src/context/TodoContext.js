import { createContext, useState, useEffect, useContext } from 'react';
import { getTodos } from '../api/todoApi'

const TodoContext = createContext();
const TODO_STORAGE = "TODOS";

const readStorage = () => {
    try {
        const storedData = localStorage.getItem(TODO_STORAGE);
        const parsedData = storedData ? JSON.parse(storedData) : [];
        return parsedData;
    } catch (error) {
        console.error("Error reading from local storage:", error);
        return [];
    }
};

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(() => readStorage());

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await getTodos();
                const { data } = response;

                if (data) {
                    setTodoList(data);
                }
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []);

    useEffect(() => {
        localStorage.setItem(TODO_STORAGE, JSON.stringify(todoList));
    }, [todoList]);

    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    );
}

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };