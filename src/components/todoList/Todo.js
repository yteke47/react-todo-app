import { useState, useEffect } from 'react';
import { MdDone, MdOutlineDeleteSweep, MdRemoveDone, MdHighlightOff, MdEdit } from 'react-icons/md';
import { useTodo } from '../../context/TodoContext';

import './Todo.css'


export function Todo({ task, isMarked, deleteTask, markTask, updateTodos }) {
    const [edit, setEdit] = useState(false);
    const [todo, setTodo] = useState('');
    const { todos } = useTodo();

    useEffect(() => {
        setEdit(false)
    }, [todos]);

    const handleEdit = () => {
        if (isMarked) return false;
        setEdit(true);
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) return false;
        console.log(e);
        updateTodos(todo);
    }

    const handleCancel = (e) => {
        console.log(e);
        setEdit(false);
        setTodo('');
    }

    return (
        <div className={`todo ${isMarked ? 'marked' : ''}`}>
            <div className='tasks-container'>
                {edit ?
                    <form className='todo-update' onSubmit={handleSubmit}>
                        <input
                            className='todoEdit'
                            onChange={handleChange}
                            value={todo}
                        />
                        <button
                            type='button'
                            className='edit-cancel-button'
                            onClick={handleCancel}
                        >
                            <MdHighlightOff className='edit-cancel-icon' />
                        </button>
                    </form>
                    :
                    <span className='task'>
                        {task}
                    </span>
                }
            </div>
            <div className='buttons-container'>
                {!edit &&
                    <>
                        {
                            !isMarked &&
                            <button
                                onClick={handleEdit}
                                disabled={edit}
                                style={{ opacity: edit ? 0.5 : 1 }}
                            >
                                <MdEdit className='icon' />
                            </button>
                        }
                        <button
                            onClick={markTask}
                            disabled={edit}
                            style={{ opacity: edit ? 0.5 : 1 }}
                        >
                            {
                                !isMarked
                                    ?
                                    <MdDone className='icon' />
                                    :
                                    <MdRemoveDone className='icon' />
                            }
                        </button>
                        <button
                            onClick={deleteTask}
                            disabled={edit}
                            style={{ opacity: edit ? 0.5 : 1 }}
                        >
                            <MdOutlineDeleteSweep className='icon' />
                        </button>
                    </>
                }
            </div>
        </div>
    )
}
