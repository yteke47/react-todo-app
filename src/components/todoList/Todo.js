import { MdDone, MdOutlineDeleteSweep, MdRemoveDone } from 'react-icons/md';

import './Todo.css'

export function Todo({ task, isMarked, deleteTask, markTask }) {
    return (
        <div className={`todo ${isMarked ? 'marked' : ''}`}>
            <span className='task'>{task}</span>
            <div className='buttons-container'>
                <button onClick={markTask}>
                    {isMarked === false ?
                        <MdDone className='icon'></MdDone>
                        :
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