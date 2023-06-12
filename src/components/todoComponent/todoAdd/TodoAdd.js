import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useTodo } from '../../context/../../context/TodoContext';
import { addTodo } from '../../../api/todoApi';

import './style.css';

export default function TodoAdd() {
    const [todo, setTodo] = useState({ task: '' });
    const { setTodoList } = useTodo();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!todo.task.trim()) return false;
        const { data } = await addTodo(todo);
        if (!data) return false;
        setTodoList(todos => [data, ...todos]);
        setTodo({ task: '' });
    };

    const isButtonDisabled = !todo.task.trim();

    return (
        <div className='todoAdd'>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setTodo({ task: e.target.value })}
                    type='text'
                    value={todo.task}
                    placeholder='Add todo'
                />
                <button type='submit' disabled={isButtonDisabled} className={isButtonDisabled ? 'disabled' : ''}>
                    <MdAdd className='icon' />
                </button>
            </form>
        </div>
    );
}
