import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from '../Components/Todo/TodoItem'

test('renders the TodoItem component', () => {
    const { getByText } = render(<TodoItem todo="Sample Todo" category="Sample Category" />);
    const task = getByText('Sample Todo');
    const category = getByText('Sample Category');
    expect(task).toBeInTheDocument();
    expect(category).toBeInTheDocument();
});
