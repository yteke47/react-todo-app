import { useState } from 'react'
import { MdAdd } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { useTodo } from '../../context/TodoContext';

import './TodoAdd.css'

const initialState = { id: null, task: "", isMarked: false, createdAt: null };

export default function TodoAdd() {
    const [todo, setTodo] = useState(initialState);
    const { todos, setTodos } = useTodo('');

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault();
        if (!todo.task.trim()) return false;
        setTodos([
            { id: uuidv4(), task: todo.task.trim(), isMarked: false, createdAt: new Date().toISOString() },
            ...todos
        ]);
        setTodo(initialState);
    }

    const isButtonDisabled = !todo.task.trim();

    return (
        <div className='todoAdd'>
            <form onSubmit={submit}>
                <input
                    onChange={handleChange}
                    name='task'
                    value={todo.task}
                    placeholder='Add todo'
                />
                <button disabled={isButtonDisabled} style={{ opacity: isButtonDisabled ? 0.5 : 1 }}>
                    <MdAdd onSubmit={submit} className='icon'></MdAdd>
                </button>
            </form>
        </div>
    )
}