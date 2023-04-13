import { useTodo } from '../../context/TodoContext';

import './Footer.css'

export default function Footer() {
    const { todos, setTodos } = useTodo();

    const deleteCompletedTodo = () => {
        setTodos(
            todos.filter((todo) => !todo.isMarked)
        )
    }

    const isButtonDisabled = todos.length > 0 && todos.find((todo) => todo.isMarked) ? false : true;
    const remaningTodos = todos.filter((todo) => !todo.isMarked).length

    return (
        <div className='todoCounterWrapper'>
            <div>
                <p>
                    {remaningTodos} pending tasks
                </p>
            </div>
            <div><button disabled={isButtonDisabled} style={{ opacity: isButtonDisabled ? 0.5 : 1 }} onClick={deleteCompletedTodo}>Clear completed</button></div>
        </div>
    )
}