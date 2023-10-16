import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';
import './Todo.css';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<{ todo: string; category: string }[]>([]);
    const [newTodo, setNewTodo] = useState({
        todo: '',
        category: '',
    });
    const [searchTodo, setSearchTodo] = useState<{ todo: string; category: string }>({
        todo: '',
        category: '',
    });


    // add todo to local storage
    const addTodo = () => {
        if (newTodo.todo.trim() !== '') {
            setTodos([...todos, { ...newTodo}]);
            // add to local storage
            localStorage.setItem('todos', JSON.stringify([...todos, { ...newTodo}]));
            setNewTodo({ todo: '', category: '' });
        }
    };

    // fetch todos from local storage
    useEffect(() => {
        const todos = localStorage.getItem('todos');
        if (todos) {
            setTodos(JSON.parse(todos));
        }
    },[]);

    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <div className="search-todo">
                <input
                    type="text"
                    value={searchTodo.todo}
                    onChange={(e) => setSearchTodo({...searchTodo,todo: e.target.value})}
                    placeholder="Search Todo"
                />
                <input
                    className="category-input"
                    type="text"
                    value={searchTodo.category}
                    onChange={(e) => setSearchTodo({...searchTodo,category: e.target.value})}
                    placeholder="Search By Category"
                />
            </div>
            <div>
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo.todo} category={todo.category} />
                ))}
            </div>
            <div className="todo-input">
                <input
                    type="text"
                    value={newTodo.todo}
                    onChange={(e) => setNewTodo({ ...newTodo, todo: e.target.value })}
                    placeholder="New Todo"
                />
                <input
                    className="category-input"
                    type="text"
                    value={newTodo.category}
                    onChange={(e) => setNewTodo({ ...newTodo, category: e.target.value })}
                    placeholder="Todo Category"
                />
                <button onClick={addTodo}>Add</button>
            </div>
        </div>
    );
};

export default TodoList;
