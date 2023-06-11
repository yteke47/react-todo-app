import { Todo } from './Todo';
import { useTodo } from '../../../context/TodoContext';
import { deleteTodo, updateTodo } from '../../../api/todoApi';

import './TodoList.css';

export default function TodoList() {
    const { todoList, setTodoList } = useTodo();

    const handleDelete = async (id) => {
        const { data } = await deleteTodo(id)
        if (!data && !data.id) return false;
        setTodoList(todos => todos.filter(todo => todo.id !== data.id));
    };

    const handleUpdate = async (id, updateField) => {
        const { data } = await updateTodo(id, updateField)
        if (!data && !data.id) return false;
        setTodoList(todos => {
            const updatedTodos = todos.map(todo => {
                if (todo.id === data.id) {
                    return data;
                }
                return todo;
            });
            return updatedTodos;
        });
    };

    return (
        <div className='todoList'>
            {
                todoList.map((todo, i) => {
                    return (
                        <Todo
                            key={i}
                            id={todo.id}
                            task={todo.task}
                            isMarked={todo.isMarked}
                            deleteTask={() => { handleDelete(todo.id) }}
                            markTask={() => { handleUpdate(todo.id, { isMarked: !todo.isMarked }) }}
                            updateTodos={(newTask) => { handleUpdate(todo.id, { task: newTask }) }}
                        />
                    )
                })
            }
        </div>
    )
}
