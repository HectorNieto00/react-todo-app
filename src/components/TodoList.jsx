import React from "react";
import './TodoList.css';

function TodoList({todos, filter, toggleTodo, deleteTodo}) {

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    return (
        <ul className="todo-list">
            {filteredTodos.length === 0 ? (
                <p>There is no ToDo</p>
            ) : (
                filteredTodos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <span
                            className="todo-text"
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))
            )}
        </ul>
    );
}

export default TodoList;
