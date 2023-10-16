import React from 'react';
import './Todo.css'

interface TodoItemProps {
    text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
    return (
        <div className="todo-item">
            {text}
        </div>
    );
};

export default TodoItem;
