import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import { render } from 'react-dom';

-import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

import { TodoInterface } from './interfaces';
import './styles/styles.css';

const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
