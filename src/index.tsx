import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from 'react-dom';
import Form from './components/form';
import List from './components/list';
import { TodoInterface } from './interfaces';
import './styles/styles.css';

const TodoListApp = () => {
    const [todos, setTodos] = React.useState<TodoInterface[]>([])

    function handleTodoCreate(todo: TodoInterface) {
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.push(todo)
        setTodos(newTodosState)
    };

    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
        setTodos(newTodosState)
    };

    function handleTodoRemove(id: string) {
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
        setTodos(newTodosState)
    };

    function handleTodoComplete(id: string) {
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
        setTodos(newTodosState)
    };

    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length === 0) {
            event.target.classList.add('todo-input-error')
        } else {
            event.target.classList.remove('todo-input-error')
        }
    };

    return (
        <div className="todo-list-app">
            <Form
                todos={todos}
                handleTodoCreate={handleTodoCreate}
            />
            <List
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />
        </div>
    )
}
// Render the App in the DOM
const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
