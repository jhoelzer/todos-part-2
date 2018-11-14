import React, { Component } from 'react';
import './index.css';
import todoList from './todos.json';

class TodoItem extends Component {
  state = {
    title: String,
    completed: true
  };

  render() {
    return (
      <li className={this.props.completed && "completed"}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.completed} />
          <label>{this.props.title}</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  state = {
    todos: todoList
  };

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.state.todos.map(todo => 
            <TodoItem 
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          )}
        </ul>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>To-do's</h1>
          <input className="new-todo" placeholder="What needs doing?" autofocus />
        </header>
        <TodoList/>
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear Completed</button>
        </footer>
      </section>
    );
  }
}

export default App;