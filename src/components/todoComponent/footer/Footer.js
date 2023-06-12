import { useTodo } from '../../../context/TodoContext';
import { clearCompleted } from '../../../api/todoApi';

import './style.css'

export default function Footer() {
    const { todoList, setTodoList } = useTodo();

    const deleteCompletedTodo = async () => {
        const response = await clearCompleted();
        if (response.status === 200) {
            setTodoList(todos => todos.filter(todo => !todo.isMarked));
        }
    }

    const isButtonDisabled = todoList.length > 0 && todoList.find((todo) => todo.isMarked) ? false : true;
    const remaningTodos = todoList.filter((todo) => !todo.isMarked).length

    return (
        <div className='todoCounterWrapper'>
            <div>
                <p>
                    {remaningTodos > 0 ? `${remaningTodos} pending tasks` : `No task`}
                </p>
            </div>
            <div><button disabled={isButtonDisabled} style={{ opacity: isButtonDisabled ? 0.5 : 1 }} onClick={deleteCompletedTodo}>Clear completed</button></div>
        </div>
    )
}