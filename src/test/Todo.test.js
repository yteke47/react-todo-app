import { render, screen, fireEvent } from '@testing-library/react';
import { Todo } from '../components/todoList/Todo';

test('renders todo component', () => {
    const task = 'Buy groceries';
    const isMarked = false;
    const deleteTask = jest.fn();
    const markTask = jest.fn();

    render(<Todo task={task} isMarked={isMarked} deleteTask={deleteTask} markTask={markTask} />);

    const taskElement = screen.getByText(task);
    expect(taskElement).toBeInTheDocument();

    const doneButton = screen.getByRole('button', { name: /mark as done/i });
    expect(doneButton).toBeInTheDocument();
    fireEvent.click(doneButton);
    expect(markTask).toHaveBeenCalledTimes(1);

    const deleteButton = screen.getByRole('button', { name: /delete task/i });
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(deleteTask).toHaveBeenCalledTimes(1);
});
