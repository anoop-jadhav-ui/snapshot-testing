import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [todos, setTodos] = useState<Array<string>>([]);
  const [todoInput, setTodoInputValue] = useState('');

  const addTodoItem = () => {
    if (todoInput) {
      setTodos([...todos, todoInput]);
      setTodoInputValue('');
    }
  };

  const clearTodoList = () => {
    setTodos([]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="todo-items">
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
      <textarea
        value={todoInput}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />
      <div className="buttons-wrapper">
        <button type="reset" onClick={clearTodoList}>
          Clear
        </button>
        <button onClick={addTodoItem}>Add</button>
      </div>
    </div>
  );
}

export default App;