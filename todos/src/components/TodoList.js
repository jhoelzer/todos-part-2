import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import todoList from '../todos.json';

class TodoList extends Component {
    state = { todos: todoList };

    toggleCompleted = clickedId => event => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === clickedId) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({ todos: newTodos });
    }; 

    addTodo = event => {
        const { todos } = this.state;
        let makeId = Math.floor(Math.random() * 500000000);

        if (event.keyCode === 13) {
            let newTodos = todos.slice(0);
            let newest = {
                userId: 1,
                id: makeId,
                title: event.target.value,
                completed: false
            };

            newTodos.push(newest);
            this.setState({ todos: newTodos });
            event.target.value = "";
        };
    };

    deleteOne = clickedId => event => {
        const newTodos = this.state.todos.filter(todo => {
            if (todo.id === clickedId) {
                return false;
            }

            return true;
        });

        this.setState({ todos: newTodos });
    };

    deleteAll = event => {
        const newTodos = this.state.todos.filter(todo => {
            if (todo.completed === true) {
                return false;
            }

            return true;
        });

        this.setState({ todos: newTodos });
    };

    render() {
        const { todos } = this.state;
    
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>Todos</h1>
                    <input className="new-todo" placeholder="What needs doing?" onKeyDown={this.addTodo} autoFocus />
                </header>
                <section className="main">
                    <ul className="todo-list">
                        {todos.map(todo =>
                            <TodoItem key={todo.id} title={todo.title} completed={todo.completed} toggleCompleted={this.toggleCompleted(todo.id)} deleteOne={this.deleteOne(todo.id)} />
                        )}
                    </ul>
                </section>
                <footer className="footer">
                    <span className="todo-count"><strong>0</strong> items(s) left</span>
                    <button className="clear-completed" onClick={this.deleteAll}>Clear Completed</button>
                </footer>
            </section>
        );
    };
};

export default TodoList;