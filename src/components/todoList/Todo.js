import { MdDone, MdOutlineDeleteSweep, MdRemoveDone } from 'react-icons/md';
import { Tooltip } from 'react-tooltip'


import 'react-tooltip/dist/react-tooltip.css'


export function Todo({ task, isMarked, deleteTask, markTask }) {
    const styles = {
        mark: {
            backgroundColor: "#5759de",
            color: "#ffffff"
        }
    };
    return (
        <div style={isMarked ? styles.mark : null} className='todo'>
            <Tooltip anchorSelect=".my-anchor-element" />

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