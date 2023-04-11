import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoAdd from './TodoAdd';

test('TodoAdd component renders input and add button', () => {
    render(<TodoAdd />);
    const inputElement = screen.getByPlaceholderText('Not Ekle');
    const addButtonElement = screen.getByRole('button', { name: 'Add' });
    expect(inputElement).toBeInTheDocument();
    expect(addButtonElement).toBeInTheDocument();
});

test('Submitting form with a value should add the new todo to the list', () => {
    const mockSetTodos = jest.fn();
    const mockUseTodo = jest.fn().mockReturnValue({ todos: [], setTodos: mockSetTodos });
    const { getByRole } = render(<TodoAdd useTodo={mockUseTodo} />);
    const inputElement = screen.getByPlaceholderText('Not Ekle');
    const addButtonElement = screen.getByRole('button', { name: 'Add' });

    userEvent.type(inputElement, 'Buy milk');
    fireEvent.click(addButtonElement);

    expect(mockSetTodos).toHaveBeenCalledWith([
        { id: expect.any(String), task: 'Buy milk', isMarked: false, createdAt: expect.any(String) }
    ]);
    expect(inputElement.value).toEqual('');
});

test('Submitting form with empty input value should not add the new todo to the list', () => {
    const mockSetTodos = jest.fn();
    const mockUseTodo = jest.fn().mockReturnValue({ todos: [], setTodos: mockSetTodos });
    const { getByRole } = render(<TodoAdd useTodo={mockUseTodo} />);
    const inputElement = screen.getByPlaceholderText('Not Ekle');
    const addButtonElement = screen.getByRole('button', { name: 'Add' });

    userEvent.type(inputElement, '   ');
    fireEvent.click(addButtonElement);

    expect(mockSetTodos).not.toHaveBeenCalled();
    expect(inputElement.value).toEqual('');
    expect(addButtonElement).toBeDisabled();
});
