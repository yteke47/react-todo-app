import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useTodo } from '../../context/../../context/TodoContext';
import { addTodo } from '../../../api/todoApi';

import './TodoAdd.css';

export default function TodoAdd() {
    const [todo, setTodo] = useState({ task: '', isMarked: false });
    const { setTodoList } = useTodo();

    const handleInputChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!todo.task.trim()) return false;
        try {
            const response = await addTodo(todo);
            setTodoList((todos) => [response.data, ...todos]);
            setTodo({ task: '', isMarked: false, });
        } catch (error) {
            console.error('TodoAdd Error:', error);
        }
    };

    const isButtonDisabled = !todo.task.trim();

    return (
        <div className='todoAdd'>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    name='task'
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
