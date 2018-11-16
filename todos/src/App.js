import React, { Component } from 'react';
import './index.css';
import todoList from './todos.json';

class TodoItem extends Component {
  render() {
    const { title, completed, toggleTodo, deleteOne } = this.props;

    return (
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={toggleTodo} defaultChecked={completed} />
          <label>{title}</label>
          <button className="destroy" onClick={deleteOne} ></button>
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  state = {
    todos: todoList
  };

  toggleTodo = clickedTodoId => event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.id === clickedTodoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  }

  handleAddTodo = event => {
    const { todos } = this.state;
    let makeId = Math.floor(Math.random() * 500000000);

    if (event.keyCode === 13) {
      let newestTodo = {
        userId: 1,
        id: makeId,
        title: event.target.value,
        completed: false
      };

      todo.push(newestTodo);
      this.setState({ todos: todos });
      event.target.value = "";
    };
  };

  deleteOne = clickedTodoId => event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.id === clickedTodoId) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  };

  deleteAllCompleted = event => {
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
          <h1>To-do's</h1>
          <input className="new-todo" placeholder="What needs doing?" autoFocus />
        </header>

        <section className="main">
          <ul className="todo-list">
            {todos.map(todo => 
              <TodoItem 
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
                toggleTodo={this.toggleTodo(todo.id)}
              />
            )}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed" onClick={this.deleteAllCompleted}>Clear Completed</button>
        </footer>
      </section>
      
    );
  }
}

class App extends Component {
  render() {
    return (
        <TodoList/>
    );
  };
};

export default App;