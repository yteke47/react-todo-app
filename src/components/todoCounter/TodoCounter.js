import { useTodo } from '../../context/TodoContext';

import './TodoCounter.css'

export default function TodoCounter() {
    const { todos, setTodos } = useTodo();

    const deleteAllTodos = () => {
        setTodos([]);
    }

    const isButtonDisabled = todos.length > 0 ? false : true;

    return (
        <div className='todoCounterWrapper'>
            <div>
                <p>
                    {todos.length} notun var
                </p>
            </div>
            <div><button disabled={isButtonDisabled} style={{ opacity: isButtonDisabled ? 0.5 : 1 }} onClick={deleteAllTodos}>Tamamlananları sil</button></div>
        </div>
    )
}