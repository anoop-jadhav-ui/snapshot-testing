import * as React from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoInput, setTodoInputValue] = React.useState('');

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
