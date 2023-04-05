import { useContext } from 'react'
import TodoContext from '../../context/TodoContext';

import './TodoCounter.css'

export default function TodoCounter() {
    const { todos, setTodos } = useContext(TodoContext);

    const deleteAllTodos = () => {
        setTodos([]);
    }

    const isButtonDisabled = todos.length > 0 ? false : true;

    console.log(isButtonDisabled);

    return (
        <div className='todoCounterWrapper'>
            <div>
                <p>
                    {todos.length} notun var
                </p>
            </div>
            <div><button disabled={isButtonDisabled} style={{ opacity: isButtonDisabled ? 0.5 : 1 }} onClick={deleteAllTodos}>Tüm notları sil</button></div>
        </div>
    )
}