import { useState } from 'react'
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './todoAdd.css'

const initialState = { id: null, task: "", isMarked: false, createdAt: Date }

function TodoAdd({ addTodos, todos }) {
    const [todo, setTodo] = useState(initialState);

    const handleInput = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        if (!/\S/.test(todo.task)) {
            toast.warn("Boş not eklemeyezsin!");
            return false;
        }
        todo.id = crypto.randomUUID();
        todo.createdAt = new Date();
        addTodos([todo, ...todos]);
        setTodo(initialState);
        toast.success("Notunu başarıyla ekledin!");

        console.log(todo)
    }

    return (
        <div className='todoAdd'>
            <form onSubmit={submit}>
                <input
                    onChange={handleInput}
                    name='task'
                    value={todo.task}
                    placeholder='Not Ekle'
                />
                <button>
                    <MdAdd onSubmit={submit} className='icon'></MdAdd>
                </button>
            </form>
        </div>
    )
}

export default TodoAdd