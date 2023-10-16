import React from 'react';
import './Todo.css'

interface TodoItemProps {
    todo: string;
    category: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, category }) => {
    return (
        <div className="todo-item">
            <p>{todo}</p> <span className="category">{category}</span>
        </div>
    );
};

export default TodoItem;
