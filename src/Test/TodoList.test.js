import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../Components/Todo/TodoList';

test('renders the TodoList component', () => {
    const { getByText } = render(<TodoList />);
    const header = getByText('Todo List');
    expect(header).toBeInTheDocument();
});

test('adds a new todo to the list', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);

    const inputTodo = getByPlaceholderText('New Todo');
    const addButton = getByText('Add');

    fireEvent.change(inputTodo, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const newTodo = getByText('New Task');
    expect(newTodo).toBeInTheDocument();
});
