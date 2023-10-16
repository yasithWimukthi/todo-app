import React from 'react';
import './Todo.css'

interface TodoItemProps {
    todo: string;
    category: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, category }) => {
    return (
        <div className="todo-item">
            {todo}
        </div>
    );
};

export default TodoItem;
