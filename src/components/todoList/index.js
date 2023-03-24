import './todoList.css'
import { MdDone, MdOutlineDeleteSweep, MdRemoveDone } from 'react-icons/md';

export default function TodoList({ todos, updateTodos }) {
    const deleteTask = (id) => {
        updateTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    const markTask = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isMarked: !todo.isMarked }
            }
            return todo
        })
        updateTodos(updatedTodos)
    }

    return (
        <div className='todoList'>
            {
                todos.map((todo, i) => {
                    return (
                        <Todo
                            key={i}
                            id={todo.id}
                            task={todo.task}
                            isMarked={todo.isMarked}
                            deleteTask={() => { deleteTask(todo.id) }}
                            markTask={() => { markTask(todo.id) }}
                        />
                    )
                })
            }
        </div>
    )
}

function Todo({ task, isMarked, deleteTask, markTask }) {
    const styles = {
        mark: {
            backgroundColor: "#5759de",
            color: "#ffffff"
        }
    };
    return (
        <div style={isMarked ? styles.mark : null} className='todo'>
            <span className='task'>{task}</span>
            <div className='buttons-container'>
                <button onClick={markTask}>
                    {isMarked === false ?
                        <MdDone className='icon'></MdDone> :
                        <MdRemoveDone className='icon'></MdRemoveDone>
                    }
                </button>
                <button onClick={deleteTask}>
                    <MdOutlineDeleteSweep className='icon'></MdOutlineDeleteSweep>
                </button>
            </div>
        </div>
    )
}