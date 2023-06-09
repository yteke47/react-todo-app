import { Todo } from './Todo';
import { useTodo } from '../../../context/TodoContext';
import { deleteTodo, updateTodo } from '../../../api/todoApi';

import './TodoList.css';

export default function TodoList() {
    const { todoList, setTodoList } = useTodo();

    const handleDelete = (id) => {
        deleteTodo(id)
            .then((response) => {
                setTodoList((todos) => todos.filter(todo => todo.id !== response.data.id));
            });
    };

    const handleMark = (id, mark) => {
        updateTodo(id, { isMarked: mark })
            .then((response) => {
                setTodoList((todos) => todos.map(todo => {
                    if (todo.id === response.data.id) {
                        return response.data;
                    }
                    return todo
                }))
            });
    };

    const handleUpdate = (id, newTask) => {
        updateTodo(id, { task: newTask })
            .then((response) => {
                setTodoList((todos) => todos.map(todo => {
                    if (todo.id === response.data.id) {
                        return response.data;
                    }
                    return todo
                }))
            });
    };

    return (
        <div className='todoList'>
            {
                todoList.map((todo, i) => {
                    return (
                        <Todo
                            key={i}
                            id={i}
                            task={todo.task}
                            isMarked={todo.isMarked}
                            deleteTask={() => { handleDelete(todo.id) }}
                            markTask={() => { handleMark(todo.id, !todo.isMarked) }}
                            updateTodos={(newTask) => { handleUpdate(todo.id, newTask) }}
                        />
                    )
                })
            }
        </div>
    )
}
