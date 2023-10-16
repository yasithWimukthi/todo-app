import React from 'react';
import './App.css';
import TodoList from "./Components/Todo/TodoList";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
       <Header />
      <TodoList />
    </div>
  );
}

export default App;
