// src/TodoList.tsx
import React, {useState} from 'react';
import TodoItem from './TodoItem';
import './Todo.css'


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
        <div className="todo-list">
            <h2>Todo List</h2>
            <div className="search-todo">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Search Todo"
                />
            </div>
            <div>
                {todos.map((todo, index) => (
                    <TodoItem key={index} text={todo}/>
                ))}
            </div>
            <div className="todo-input">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="New Todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
        </div>
    );
};

export default TodoList;
