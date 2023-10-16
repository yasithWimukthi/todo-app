import React from 'react';

interface TodoItemProps {
    text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
    return (
        <div>
            <input type="checkbox" /> {text}
        </div>
    );
};

export default TodoItem;
