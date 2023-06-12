import { useState, useEffect } from 'react';
import { MdDone, MdOutlineDeleteSweep, MdRemoveDone, MdHighlightOff, MdEdit } from 'react-icons/md';
import { useTodo } from '../../../context/TodoContext';
import { useLoading } from '../../../context/LoadingContext';

import './Todo.css'


export function Todo({ task, isMarked, deleteTask, markTask, updateTodos }) {
    const [edit, setEdit] = useState(false);
    const [todo, setTodo] = useState('');
    const { todoList } = useTodo();
    const { loading } = useLoading();

    useEffect(() => {
        setEdit(false)
    }, [todoList]);

    const handleEdit = () => {
        if (isMarked) return false;
        setEdit(true);
        setTodo(task);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim() || loading) return false;
        updateTodos(todo);
    }

    const handleCancel = (e) => {
        setEdit(false);
    }

    const isButtonDisabled = edit || loading

    return (
        <div className={`todo ${isMarked ? 'marked' : ''}`}>
            <div className='tasks-container'>
                {edit ?
                    <form className='todo-update' onSubmit={handleSubmit}>
                        <input
                            className='todoEdit'
                            onChange={e => setTodo(e.target.value)}
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
                                disabled={isButtonDisabled}
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
                            disabled={isButtonDisabled}
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