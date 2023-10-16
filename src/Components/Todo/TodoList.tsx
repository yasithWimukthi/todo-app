import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';
import './Todo.css';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<{ todo: string; category: string }[]>([]);
    const [newTodo, setNewTodo] = useState({
        todo: '',
        category: '',
    });
    const [searchKey, setSearchKey] = useState<{ todo: string; category: string }>({
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

    // search todo
    useEffect(() => {
        const todos = localStorage.getItem('todos');
        // if search key is only todo then search by todo
        if (searchKey.todo.trim() !== '' && searchKey.category.trim() === '') {
            if (todos) {
                const todosArray = JSON.parse(todos);
                const filteredTodos = todosArray.filter((todo: { todo: string; category: string }) => todo.todo.includes(searchKey.todo));
                setTodos(filteredTodos);
            }
        }
        // if search key is only category then search by category
        else if (searchKey.todo.trim() === '' && searchKey.category.trim() !== '') {
            if (todos) {
                const todosArray = JSON.parse(todos);
                const filteredTodos = todosArray.filter((todo: { todo: string; category: string }) => todo.category.includes(searchKey.category));
                setTodos(filteredTodos);
            }
        }
        // if search key is both todo and category then search by both todo and category
        else if (searchKey.todo.trim() !== '' && searchKey.category.trim() !== '') {
            if (todos) {
                const todosArray = JSON.parse(todos);
                const filteredTodos = todosArray.filter((todo: { todo: string; category: string }) => todo.todo.includes(searchKey.todo) && todo.category.includes(searchKey.category));
                setTodos(filteredTodos);
            }
        }
    },[searchKey]);

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
                    value={searchKey.todo}
                    onChange={(e) => setSearchKey({...searchKey,todo: e.target.value})}
                    placeholder="Search Todo"
                />
                <input
                    className="category-input"
                    type="text"
                    value={searchKey.category}
                    onChange={(e) => setSearchKey({...searchKey,category: e.target.value})}
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
