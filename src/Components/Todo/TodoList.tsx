// src/TodoList.tsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="New Todo"
            />
            <button onClick={addTodo}>Add</button>
            <div>
                {todos.map((todo, index) => (
                    <TodoItem key={index} text={todo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
