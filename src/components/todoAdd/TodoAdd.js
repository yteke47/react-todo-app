import { useState, useContext } from 'react'
import { MdAdd } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from '../../context/TodoContext';

import './TodoAdd.css'

const initialState = { id: null, task: "", isMarked: false, createdAt: Date }

export default function TodoAdd() {
    const [todo, setTodo] = useState(initialState);
    const { todos, setTodos } = useContext(TodoContext);

    const handleInput = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        if (!/\S/.test(todo.task)) {
            return false;
        }
        setTodos([
            { id: uuidv4(), task: todo.task, isMarked: false, createdAt: new Date().toISOString() },
            ...todos
        ]);
        setTodo(initialState);
    }

    const isButtonDisabled = todo.task.length > 0 ? false : true;

    return (
        <div className='todoAdd'>
            <form onSubmit={submit}>
                <input
                    onChange={handleInput}
                    name='task'
                    value={todo.task}
                    placeholder='Not Ekle'
                />
                <button disabled={isButtonDisabled} style={{ opacity: isButtonDisabled ? 0.5 : 1 }}>
                    <MdAdd onSubmit={submit} className='icon'></MdAdd>
                </button>
            </form>
        </div>
    )
}