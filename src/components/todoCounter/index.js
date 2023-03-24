import React from 'react'

import './todoCounter.css'

function TodoCounter({ todos, updateTodos }) {
    const deleteAllTodos = () => {
        updateTodos([]);
    }

    return (
        <div className='todoCounterWrapper'>
            <div>
                <p>
                    {todos.length} notun var
                </p>
            </div>
            <div><button onClick={deleteAllTodos}>Tüm notları sil</button></div>
        </div>
    )
}

export default TodoCounter;