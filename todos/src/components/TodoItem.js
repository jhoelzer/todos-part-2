import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { title, completed, toggleCompleted, deleteOne } = this.props;

        return (
            <li className={completed ? "completed" : ""}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={toggleCompleted} defaultChecked={completed} />
                    <label>{title}</label>
                    <button className="destroy" onClick={deleteOne}></button>
                </div>
            </li>
        );
    };
};

export default TodoItem;