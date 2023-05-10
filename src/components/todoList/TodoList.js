import { Todo } from './Todo';
import { useTodo } from '../../context/TodoContext';

import './TodoList.css'

export default function TodoList() {
    const { todos, setTodos } = useTodo();

    const deleteTask = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    const markTask = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isMarked: !todo.isMarked }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const updateTodos = (id, newTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: newTask.trim() }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div className='todoList'>
            {
                todos.map((todo, i) => {
                    return (
                        <Todo
                            key={i}
                            id={todo.id}
                            task={todo.task}
                            isMarked={todo.isMarked}
                            deleteTask={() => { deleteTask(todo.id) }}
                            markTask={() => { markTask(todo.id) }}
                            updateTodos={(newTask) => { updateTodos(todo.id, newTask) }}
                        />
                    )
                })
            }
        </div>
    )
}
